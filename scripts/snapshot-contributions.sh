#!/usr/bin/env bash
# Refresh public/data/contributions.json from the GitHub GraphQL API (needs `gh auth login`).
set -euo pipefail
mkdir -p public/data
gh api graphql -f query='{ user(login:"Auro-rium") { contributionsCollection { contributionCalendar { totalContributions weeks { contributionDays { date contributionCount } } } } } }' \
  --jq '.data.user.contributionsCollection.contributionCalendar | {total: .totalContributions, days: [.weeks[].contributionDays[] | [.date, .contributionCount]]}' > public/data/contributions.json
