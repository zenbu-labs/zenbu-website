import Link from "next/link";
import { Nav } from "../nav";

export const metadata = {
  title: "Download Zenbu",
  description: "Download Zenbu for macOS, Windows, and Linux.",
};

type Option = {
  label: string;
  note?: string;
  href: string;
};

type Platform = {
  name: string;
  options: Option[];
};

const platforms: Platform[] = [
  {
    name: "macOS",
    options: [
      { label: "Universal", href: "#" },
      { label: "Apple Silicon", href: "#" },
      { label: "Intel", href: "#" },
    ],
  },
  {
    name: "Windows",
    options: [
      { label: "Universal", href: "#" },
      { label: "x64", href: "#" },
      { label: "ARM64", href: "#" },
    ],
  },
  {
    name: "Linux",
    options: [
      { label: "AppImage", href: "#" },
      { label: "Deb", href: "#" },
      { label: "AppImage", note: "ARM64", href: "#" },
      { label: "Flatpak", note: "Community maintained", href: "#" },
    ],
  },
];

export default function DownloadPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F4] text-[#111] font-sans">
      <Nav />

      <section className="px-6 pt-20 pb-12 max-w-3xl mx-auto w-full text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Download Zenbu
        </h1>
        <p className="mt-4 text-sm text-zinc-500">
          Pick a build for your platform.
        </p>
      </section>

      <section className="px-6 pb-28 max-w-3xl mx-auto w-full">
        <div className="rounded-xl border border-zinc-200 bg-white divide-y divide-zinc-200">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="grid grid-cols-[140px_1fr] gap-6 px-6 py-6"
            >
              <div className="text-sm font-semibold">{platform.name}</div>
              <div className="flex flex-col gap-2.5">
                {platform.options.map((opt, i) => (
                  <a
                    key={i}
                    href={opt.href}
                    className="flex items-center gap-2 text-sm text-[#111] hover:text-zinc-500 transition-colors w-fit"
                  >
                    <DownloadIcon />
                    <span className="font-medium">{opt.label}</span>
                    {opt.note && (
                      <span className="text-xs text-zinc-400">{opt.note}</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-zinc-200 px-6 py-6 mt-auto">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-xs text-zinc-400">
          <Link href="/">Zenbu</Link>
          <div className="flex items-center gap-4">
            <a href="https://github.com/zenbu-labs/zenbu" target="_blank" rel="noreferrer" className="hover:text-zinc-600 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg
      className="w-4 h-4 text-zinc-400"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="6.5" />
      <path d="M8 4.5v6M5.5 8L8 10.5 10.5 8" />
    </svg>
  );
}
