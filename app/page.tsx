import Image from "next/image";
import Link from "next/link";
import { ContactLink } from "./contact-link";
import { Nav } from "./nav";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F4] text-[#111] font-sans">
      <Nav />

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-32 pb-20 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-snug">
          The extensible interface
          <br />
          to run <span className="text-zinc-400">any</span> agent
        </h1>

        <div className="mt-10 flex items-center gap-5">
          <Link
            href="/download"
            className="inline-flex items-center bg-[#111] text-white rounded-lg px-5 py-2.5 text-sm font-semibold hover:bg-black transition-colors"
          >
            Download Zenbu
          </Link>
        </div>
      </section>

      {/* Screenshot */}
      <section className="px-4 sm:px-6 pb-28 max-w-3xl mx-auto w-full">
        <div className="w-full rounded-lg border border-zinc-200 bg-white overflow-hidden">
          <Image
            src="/screenshot.png"
            alt="Zenbu interface screenshot"
            width={1600}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Features */}
      <section className="pb-28 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-zinc-200">
          <IntroCell />
          <FeatureCell
            title="Self-modifiable"
            description="Zenbu ships with its full source code and runs it directly. Ask your agent to edit any part of the app, or build on top of it with a rich plugin API."
          />
          <FeatureCell
            title="Hot reloading"
            description="Edit the app or a plugin and the running interface updates instantly."
          />
          <FeatureCell
            title="Open plugin marketplace"
            description="Plugins install as source code you can read and edit. Browse, fork, and publish your own."
          />
          <FeatureCell
            title="Local first"
            description="All your data stays on your device."
          />
          <FeatureCell
            title="Performant"
            description="Conversations stay fast no matter how long they get."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-28 flex flex-col items-center text-center gap-5">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Free and open source.
        </h2>
        <Link
          href="/download"
          className="inline-flex items-center bg-[#111] text-white rounded-lg px-5 py-2.5 text-sm font-semibold hover:bg-black transition-colors"
        >
          Download Zenbu
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 px-6 py-6 mt-auto">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-xs text-zinc-400">
          <span>© 2026 Zenbu Labs Inc.</span>
          <div className="flex items-center gap-4">
            <ContactLink className="hover:text-zinc-600 transition-colors tabular-nums" />
            <a href="https://x.com/zenbu_labs" target="_blank" rel="noreferrer" className="hover:text-zinc-600 transition-colors">X</a>
            <a href="https://discord.gg/t3jzHHfc6z" target="_blank" rel="noreferrer" className="hover:text-zinc-600 transition-colors">Discord</a>
            <a href="https://github.com/zenbu-labs/zenbu" target="_blank" rel="noreferrer" className="hover:text-zinc-600 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function IntroCell() {
  return (
    <div className="border-r border-b border-zinc-200 p-8 flex flex-col">
      <h2 className="text-lg font-semibold tracking-tight">
        One interface, every agent
      </h2>
      <p className="mt-2 text-sm text-zinc-500 leading-relaxed max-w-[32ch]">
        Bring your existing Claude Code, Codex, Gemini, or Cursor subscription.
      </p>
    </div>
  );
}

function FeatureCell({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border-r border-b border-zinc-200 p-8 flex flex-col">
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-zinc-500 leading-relaxed max-w-[32ch]">
        {description}
      </p>
    </div>
  );
}

