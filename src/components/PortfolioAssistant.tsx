import { FormEvent, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  Bot,
  ExternalLink,
  LoaderCircle,
  MessageSquare,
  RotateCcw,
  Send,
  X,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
  followUps?: string[];
};

const API_URL =
  import.meta.env.VITE_PORTFOLIO_AGENT_API_URL ||
  "https://aurorium-portfolio-agent.vercel.app/api/chat";
const GREETING =
  "Hey — welcome. I can help you find the useful part of this portfolio: the strongest system for your needs, the technical details behind it, or whether Ishan could be a good fit. What brings you here?";
const SUGGESTIONS = [
  "I’m hiring for an applied AI role",
  "Show me the strongest production system",
  "I want a technical deep dive",
];
const STORAGE_KEY = "aurorium-portfolio-assistant-session";

function loadSession(): ChatMessage[] {
  try {
    const saved = window.sessionStorage.getItem(STORAGE_KEY);
    if (!saved) return [{ role: "assistant", content: GREETING }];
    const parsed = JSON.parse(saved) as ChatMessage[];
    if (!Array.isArray(parsed) || !parsed.length) return [{ role: "assistant", content: GREETING }];
    return parsed.filter(
      (message) =>
        message &&
        (message.role === "user" || message.role === "assistant") &&
        typeof message.content === "string",
    );
  } catch {
    return [{ role: "assistant", content: GREETING }];
  }
}

export function PortfolioAssistant() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(loadSession);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-12)));
  }, [messages]);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowGreeting(true), 2500);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const openChat = () => {
    setIsOpen(true);
    setShowGreeting(false);
  };

  const sendMessage = async (content: string) => {
    const trimmed = content.trim();
    if (!trimmed || isSending) return;

    const userMessage: ChatMessage = { role: "user", content: trimmed };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setIsSending(true);

    if (!API_URL) {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "The assistant is being configured. You can still explore the projects and public links on this page.",
        },
      ]);
      setIsSending(false);
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages
            .filter((message, index) => !(index === 0 && message.role === "assistant"))
            .slice(-10),
        }),
      });
      const data = (await response.json()) as {
        answer?: string;
        followUps?: string[];
        error?: string;
      };

      if (!response.ok || !data.answer) {
        throw new Error(data.error || "No answer returned.");
      }

      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.answer!, followUps: data.followUps },
      ]);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "The assistant is temporarily unavailable.";
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: `${message} You can use the GitHub, LinkedIn, and project links on this page in the meantime.`,
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendMessage(input);
  };

  const resetConversation = () => {
    setMessages([{ role: "assistant", content: GREETING }]);
    setInput("");
  };

  const shell =
    theme === "dark"
      ? "border-zinc-800 bg-zinc-950 text-white shadow-black/50"
      : "border-zinc-200 bg-white text-black shadow-zinc-400/25";
  const subtle = theme === "dark" ? "text-zinc-400" : "text-zinc-600";

  return (
    <div className="fixed bottom-4 right-4 z-[70] sm:bottom-6 sm:right-6 print:hidden">
      {showGreeting && !isOpen && (
        <div
          className={`absolute bottom-16 right-0 w-[min(19rem,calc(100vw-2rem))] border p-4 shadow-xl ${shell}`}
          role="status"
        >
          <button
            type="button"
            onClick={() => setShowGreeting(false)}
            className={`absolute right-2 top-2 p-1 ${subtle}`}
            aria-label="Dismiss assistant greeting"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
              <Bot className="h-4 w-4" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
              Portfolio guide
            </span>
          </div>
          <p className={`pr-3 text-xs leading-relaxed ${subtle}`}>
            Not sure where to start? Tell me what you&apos;re looking for and I&apos;ll point you to the right work.
          </p>
          <button
            type="button"
            onClick={openChat}
            className="mt-3 text-xs font-semibold underline underline-offset-4"
          >
            Start a conversation
          </button>
        </div>
      )}

      {isOpen && (
        <section
          className={`absolute bottom-16 right-0 flex h-[min(36rem,calc(100vh-7rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden border shadow-2xl ${shell}`}
          aria-label="Ishan's portfolio assistant"
        >
          <header
            className={`flex items-center justify-between border-b px-4 py-3 ${
              theme === "dark" ? "border-zinc-800" : "border-zinc-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                <Bot className="h-4 w-4" />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-current bg-emerald-500" />
              </span>
              <div>
                <h2 className="text-sm font-semibold">Ask about Ishan</h2>
                <p className={`font-mono text-[9px] uppercase tracking-[0.14em] ${subtle}`}>
                  I’ll point you in the right direction
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={resetConversation}
                className={`p-1.5 transition-colors ${subtle}`}
                aria-label="Start a new assistant conversation"
                title="New conversation"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className={`p-1.5 transition-colors ${subtle}`}
                aria-label="Close portfolio assistant"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </header>

          <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4" aria-live="polite">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] rounded-sm px-3 py-2.5 text-xs leading-relaxed ${
                    message.role === "user"
                      ? theme === "dark"
                        ? "bg-white text-black"
                        : "bg-black text-white"
                      : theme === "dark"
                        ? "border border-zinc-800 bg-zinc-900 text-zinc-200"
                        : "border border-zinc-200 bg-zinc-50 text-zinc-700"
                  }`}
                >
                  <ReactMarkdown
                    components={{
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 underline underline-offset-2"
                        >
                          {children}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ),
                      p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                      ul: ({ children }) => (
                        <ul className="my-2 list-disc space-y-1 pl-4">{children}</ul>
                      ),
                    }}
                  >
                    {message.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}

            {messages.map((message, index) =>
              message.role === "assistant" &&
              (message.followUps || (index === 0 && messages.length === 1 ? SUGGESTIONS : undefined)) ? (
                <div key={`follow-ups-${index}`} className="space-y-2 pl-1">
                  <p className={`font-mono text-[9px] uppercase tracking-[0.12em] ${subtle}`}>
                    {index === 0 ? "Quick paths" : "Where should we go next?"}
                  </p>
                  {(message.followUps ?? SUGGESTIONS).slice(0, 3).map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => void sendMessage(suggestion)}
                      className={`block w-full border px-3 py-2 text-left text-[11px] transition-colors ${
                        theme === "dark"
                          ? "border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white"
                          : "border-zinc-200 text-zinc-600 hover:border-zinc-400 hover:text-black"
                      }`}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              ) : null,
            )}

            {isSending && (
              <div className={`flex items-center gap-2 text-[11px] ${subtle}`}>
                <LoaderCircle className="h-3.5 w-3.5 animate-spin" />
                Looking across the work…
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className={`border-t p-3 ${theme === "dark" ? "border-zinc-800" : "border-zinc-200"}`}
          >
            <div
              className={`flex items-end gap-2 border px-3 py-2 ${
                theme === "dark"
                  ? "border-zinc-800 bg-black focus-within:border-zinc-600"
                  : "border-zinc-200 bg-zinc-50 focus-within:border-zinc-400"
              }`}
            >
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value.slice(0, 800))}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    event.currentTarget.form?.requestSubmit();
                  }
                }}
                rows={1}
                placeholder="Ask about a project or skill…"
                className="max-h-24 min-h-6 flex-1 resize-none bg-transparent text-xs outline-none placeholder:text-zinc-500"
                disabled={isSending}
                aria-label="Message for portfolio assistant"
              />
              <button
                type="submit"
                disabled={isSending || !input.trim()}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-emerald-500 text-black transition-opacity disabled:opacity-35"
                aria-label="Send message"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
            <p className={`mt-2 text-center font-mono text-[8px] uppercase tracking-[0.12em] ${subtle}`}>
              Grounded in the work shown here
            </p>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => (isOpen ? setIsOpen(false) : openChat())}
        className={`flex h-12 w-12 items-center justify-center rounded-full border shadow-lg transition-transform hover:-translate-y-0.5 ${shell}`}
        aria-label={isOpen ? "Close portfolio assistant" : "Open portfolio assistant"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
      </button>
    </div>
  );
}
