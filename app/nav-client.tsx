"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavClient({ stars }: { stars: string | null }) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between pl-3 pr-3 sm:pr-6 py-3 max-w-5xl mx-auto w-full text-sm">
      <Link href="/" className="flex items-end gap-2 font-semibold leading-none">
        <Image
          src="/logo.png"
          alt=""
          width={78}
          height={87}
          className="[image-rendering:pixelated] block h-6 w-auto"
        />
        <span
          className="font-mono text-[25px] leading-none translate-y-[3px]"
        >
          Zenbu
        </span>
      </Link>
      <div className="flex items-center gap-4 sm:gap-6">
        <NavLink href="/download" active={pathname === "/download"}>
          Download
        </NavLink>
        <a
          href="https://discord.gg/t3jzHHfc6z"
          target="_blank"
          rel="noreferrer"
          aria-label="Discord"
          className="flex items-center gap-2 text-zinc-500 hover:text-[#111] transition-colors"
        >
          <DiscordIcon />
          <span className="hidden sm:inline">Discord</span>
        </a>
        <a
          href="https://github.com/zenbu-labs/zenbu"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="flex items-center gap-2 text-zinc-500 hover:text-[#111] transition-colors"
        >
          <GitHubIcon />
          <span className="hidden sm:inline">GitHub</span>
          {stars && (
            <span className="hidden sm:inline text-xs bg-zinc-200 px-1.5 py-0.5 rounded tabular-nums">
              {stars}
            </span>
          )}
        </a>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`transition-colors ${
        active ? "text-[#111]" : "text-zinc-500 hover:text-[#111]"
      }`}
    >
      {children}
    </Link>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 256 199" preserveAspectRatio="xMidYMid">
      <path
        d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z"
        fill="#5865F2"
      />
    </svg>
  );
}
