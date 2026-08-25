"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  comparison,
  glossary,
  journey,
  mistakes,
  services,
  slides,
} from "@/data/content";
import {
  IconAir,
  IconCustoms,
  IconForward,
  IconOcean,
  IconSurface,
  RouteMap,
  serviceIcons,
} from "@/components/Icons";

function Slide({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`slide grid-sea overflow-hidden px-5 py-24 md:px-10 lg:px-16 ${className}`}
    >
      <div className="grain" />
      <div className="relative mx-auto flex min-h-[calc(100svh-6rem)] w-full max-w-7xl flex-col justify-center">
        {children}
      </div>
    </section>
  );
}

export function Deck() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const nodes = [...root.querySelectorAll<HTMLElement>(".slide")];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = nodes.indexOf(visible.target as HTMLElement);
        if (index >= 0) setActive(index);
      },
      { root, threshold: [0.45, 0.6] },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        go(active + 1);
      }
      if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        go(active - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  function go(index: number) {
    const root = rootRef.current;
    if (!root) return;
    const next = Math.max(0, Math.min(slides.length - 1, index));
    const el = root.querySelectorAll<HTMLElement>(".slide")[next];
    if (!el) return;
    root.scrollTo({ top: el.offsetTop, behavior: "smooth" });
  }

  useEffect(() => {
    const applyHash = () => {
      const root = rootRef.current;
      if (!root) return;
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      const index = slides.findIndex((s) => s.id === id);
      if (index < 0) return;
      const el = root.querySelectorAll<HTMLElement>(".slide")[index];
      if (!el) return;
      root.scrollTo({ top: el.offsetTop, behavior: "instant" });
    };
    const t = window.setTimeout(applyHash, 40);
    window.addEventListener("hashchange", applyHash);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("hashchange", applyHash);
    };
  }, []);

  return (
    <div ref={rootRef} className="deck">
      <aside className="pointer-events-none fixed top-1/2 right-4 z-30 hidden -translate-y-1/2 lg:block">
        <div className="pointer-events-auto flex flex-col items-end gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => go(i)}
              className="group flex items-center gap-3"
              aria-label={`Go to ${s.label}`}
            >
              <span
                className={`font-mono text-[0.6rem] uppercase tracking-[0.16em] transition-opacity ${
                  i === active ? "text-copper-bright opacity-100" : "text-muted opacity-0 group-hover:opacity-100"
                }`}
              >
                {s.label}
              </span>
              <span
                className={`h-2 w-2 rounded-full border ${
                  i === active
                    ? "border-copper bg-copper"
                    : "border-muted/50 bg-transparent"
                }`}
              />
            </button>
          ))}
        </div>
      </aside>

      <div className="pointer-events-none fixed bottom-5 left-24 z-30 hidden font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted md:block">
        {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        <span className="ml-4 hidden text-paper-dim/70 xl:inline">↑ ↓ to move</span>
      </div>

      <Slide id="cover">
        <p className="kicker">A logistics briefing</p>
        <h1 className="display mt-6 max-w-5xl text-5xl text-paper sm:text-7xl lg:text-8xl">
          Cargo does not move by luck. It moves by a plan.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper-dim md:text-xl">
          TheLogiserve is a presentation of how modern freight actually works —
          air, ocean, and surface transport, held together by forwarding and
          customs clearance.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#understand"
            onClick={(e) => {
              e.preventDefault();
              go(1);
            }}
            className="rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-copper-bright"
          >
            Start the briefing
          </a>
          <Link
            href="/quote"
            className="rounded-full border border-line px-6 py-3 text-sm text-paper hover:border-copper hover:text-copper-bright"
          >
            Request a shipment plan
          </Link>
        </div>
        <RouteMap className="float-y mt-8 hidden h-40 w-full max-w-3xl opacity-90 lg:block" />
      </Slide>

      <Slide id="understand">
        <p className="kicker">01 · Understand logistics</p>
        <h2 className="display mt-5 max-w-4xl text-4xl sm:text-6xl">
          Shipping is a vehicle. Logistics is the system.
        </h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <p className="max-w-xl text-lg leading-relaxed text-paper-dim">
            People often describe a move as “put it on a truck” or “send it by
            sea.” The real work is choosing the mode, preparing documents,
            clearing a border, and connecting first mile to last mile so the
            buyer receives the goods on time and at a known cost.
          </p>
          <ul className="space-y-4 text-paper">
            {[
              "A shipment is a sequence, not a single booking.",
              "Cost, speed, and certainty trade off. You pick the priority.",
              "The cheapest rate is not the cheapest landed cost.",
              "Borders do not care how fast the plane or vessel is — only whether the declaration is right.",
            ].map((item) => (
              <li key={item} className="flex gap-3 border-l border-copper/70 pl-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Slide>

      <Slide id="journey">
        <p className="kicker">02 · The cargo journey</p>
        <h2 className="display mt-5 text-4xl sm:text-6xl">Eight handoffs. One chain.</h2>
        <p className="mt-4 max-w-2xl text-paper-dim">
          If any stage is late or incomplete, the rest of the chain waits. That
          is why professional logistics is coordination first, vehicles second.
        </p>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {journey.map((step) => (
            <li
              key={step.n}
              className="rounded-2xl border border-line bg-panel/60 p-5"
            >
              <p className="font-mono text-xs text-copper-bright">{step.n}</p>
              <h3 className="mt-2 font-serif text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper-dim">{step.body}</p>
            </li>
          ))}
        </ol>
      </Slide>

      <Slide id="services">
        <p className="kicker">03 · Five services</p>
        <h2 className="display mt-5 max-w-3xl text-4xl sm:text-6xl">
          TheLogiserve covers the whole move.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service) => {
            const Icon = serviceIcons[service.slug];
            return (
              <Link
                key={service.slug}
                href={`/#${service.slug}`}
                className="group rounded-2xl border border-line bg-panel/50 p-5 transition-colors hover:border-copper/60 hover:bg-panel"
              >
                <Icon className="h-12 w-12 text-copper-bright" />
                <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                  {service.kicker}
                </p>
                <h3 className="mt-2 font-serif text-2xl group-hover:text-copper-bright">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-dim">{service.short}</p>
              </Link>
            );
          })}
        </div>
      </Slide>

      <ServiceSlide
        id="air-freight"
        index="04"
        icon={<IconAir className="h-14 w-14 text-sky" />}
      />
      <ServiceSlide
        id="ocean-freight"
        index="05"
        icon={<IconOcean className="h-14 w-14 text-sea" />}
      />
      <ServiceSlide
        id="surface-transportation"
        index="06"
        icon={<IconSurface className="h-14 w-14 text-copper-bright" />}
      />
      <ServiceSlide
        id="freight-forwarding"
        index="07"
        icon={<IconForward className="h-14 w-14 text-paper" />}
      />
      <ServiceSlide
        id="customs-clearance"
        index="08"
        icon={<IconCustoms className="h-14 w-14 text-copper" />}
      />

      <Slide id="choose">
        <p className="kicker">09 · How to choose</p>
        <h2 className="display mt-5 text-4xl sm:text-6xl">Air, ocean, or land?</h2>
        <p className="mt-4 max-w-2xl text-paper-dim">
          Use the mode that matches the business priority. Many importers split:
          a few cartons fly so the shelf is not empty while the rest of the
          order follows by ocean.
        </p>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {comparison.map((row) => (
            <article
              key={row.mode}
              className="rounded-2xl border border-line bg-panel/60 p-6"
            >
              <h3 className="font-serif text-3xl">{row.mode}</h3>
              <dl className="mt-6 space-y-3 text-sm">
                <Fact label="Speed" value={row.speed} />
                <Fact label="Cost shape" value={row.cost} />
                <Fact label="Billed as" value={row.unit} />
                <Fact label="Best cargo" value={row.best} />
                <Fact label="Usual risk" value={row.risk} />
              </dl>
            </article>
          ))}
        </div>
      </Slide>

      <Slide id="glossary">
        <p className="kicker">10 · The language</p>
        <h2 className="display mt-5 text-4xl sm:text-6xl">Words that keep cargo moving.</h2>
        <div className="mt-10 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {glossary.map((g) => (
            <div key={g.term} className="border-t border-line pt-4">
              <h3 className="font-mono text-sm tracking-wide text-copper-bright">{g.term}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper-dim">{g.def}</p>
            </div>
          ))}
        </div>
      </Slide>

      <Slide id="close">
        <p className="kicker">11 · Work with us</p>
        <h2 className="display mt-5 max-w-4xl text-4xl sm:text-6xl">
          Tell us origin, destination, and when the cargo is ready.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-paper-dim">
          We will come back with a mode recommendation, a document checklist,
          and a plan that includes the inland legs — not just a line-haul rate.
        </p>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {mistakes.map((m) => (
            <p key={m} className="rounded-xl border border-line px-4 py-3 text-sm text-paper-dim">
              Avoid: {m.charAt(0).toLowerCase() + m.slice(1)}
            </p>
          ))}
        </div>
        <Link
          href="/quote"
          className="mt-10 inline-flex w-fit rounded-full bg-copper px-7 py-3 text-sm font-medium text-ink hover:bg-copper-bright"
        >
          Request a shipment plan
        </Link>
      </Slide>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line/80 pb-2">
      <dt className="text-muted">{label}</dt>
      <dd className="text-right text-paper">{value}</dd>
    </div>
  );
}

function ServiceSlide({
  id,
  index,
  icon,
}: {
  id: (typeof services)[number]["slug"];
  index: string;
  icon: React.ReactNode;
}) {
  const service = services.find((s) => s.slug === id)!;
  return (
    <Slide id={id}>
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="kicker">
            {index} · {service.kicker}
          </p>
          <h2 className="display mt-5 text-4xl sm:text-6xl">{service.title}</h2>
        </div>
        <div className="hidden sm:block">{icon}</div>
      </div>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-paper-dim">{service.summary}</p>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
            How it works
          </h3>
          <ol className="mt-4 space-y-3">
            {service.howItWorks.map((line, i) => (
              <li key={line} className="flex gap-3 text-sm leading-relaxed text-paper">
                <span className="font-mono text-copper-bright">{String(i + 1).padStart(2, "0")}</span>
                {line}
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-2xl border border-line bg-panel/70 p-6">
          <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
            Snapshot
          </h3>
          <dl className="mt-4 space-y-3">
            {service.facts.map((f) => (
              <Fact key={f.label} label={f.label} value={f.value} />
            ))}
          </dl>
          <Link
            href={`/services/${service.slug}`}
            className="mt-6 inline-block text-sm text-copper-bright hover:text-paper"
          >
            Open the full explainer →
          </Link>
        </div>
      </div>
    </Slide>
  );
}
