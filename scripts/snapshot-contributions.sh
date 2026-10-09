#!/usr/bin/env bash
# Refresh public/data/contributions.json (last 18 months) from the GitHub GraphQL API (needs `gh auth login`).
# GitHub caps a contributions query at one year, so this fetches two windows and merges them.
set -euo pipefail
mkdir -p public/data

start=$(date -u -d '18 months ago' +%Y-%m-%d)
mid=$(date -u -d "$start + 1 year - 1 day" +%Y-%m-%d)
mid_next=$(date -u -d "$mid + 1 day" +%Y-%m-%d)
now=$(date -u +%Y-%m-%d)

fetch() {
  gh api graphql -F from="${1}T00:00:00Z" -F to="${2}T23:59:59Z" -f query='
    query($from: DateTime!, $to: DateTime!) {
      user(login: "Auro-rium") { contributionsCollection(from: $from, to: $to) { contributionCalendar { weeks { contributionDays { date contributionCount } } } } }
    }' --jq '[.data.user.contributionsCollection.contributionCalendar.weeks[].contributionDays[] | [.date, .contributionCount]]'
}

jq -s --arg start "$start" '
  (.[0] + .[1]) | map(select(.[0] >= $start)) | unique_by(.[0]) | sort_by(.[0])
  | {total: (map(.[1]) | add), days: .}' <(fetch "$start" "$mid") <(fetch "$mid_next" "$now") > public/data/contributions.json
