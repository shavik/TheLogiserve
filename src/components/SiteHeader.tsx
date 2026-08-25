"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandMark } from "./BrandMark";
import { nav } from "@/data/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 md:px-8">
        <Link
          href="/"
          aria-label="THE LOGISERVE — We serve logistics with ease"
          className="rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-copper"
        >
          <BrandMark compact />
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-paper-dim md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-paper"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/quote"
            className="rounded-full border border-copper/50 bg-copper/10 px-4 py-2 text-copper-bright transition-colors hover:bg-copper hover:text-ink"
          >
            Get a plan
          </Link>
        </nav>
        <button
          type="button"
          className="rounded-full border border-line px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-paper md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="pointer-events-auto mx-5 rounded-2xl border border-line bg-harbor/95 p-5 backdrop-blur md:hidden">
          <div className="flex flex-col gap-4 text-sm">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/quote" onClick={() => setOpen(false)} className="text-copper-bright">
              Get a plan
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
