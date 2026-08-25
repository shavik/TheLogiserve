import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceIcons } from "@/components/Icons";
import { services } from "@/data/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const Icon = serviceIcons[service.slug];

  return (
    <main className="grid-sea relative min-h-svh px-5 pt-28 pb-20 md:px-10">
      <div className="grain" />
      <article className="relative mx-auto max-w-4xl">
        <Link href={`/#${service.slug}`} className="text-sm text-muted hover:text-copper-bright">
          ← Back to the briefing
        </Link>
        <div className="mt-8 flex items-center gap-4">
          <Icon className="h-14 w-14 text-copper-bright" />
          <div>
            <p className="kicker">{service.kicker}</p>
            <h1 className="display mt-2 text-5xl sm:text-6xl">{service.title}</h1>
          </div>
        </div>
        <p className="mt-8 text-xl leading-relaxed text-paper-dim">{service.summary}</p>

        <section className="mt-12">
          <h2 className="font-serif text-3xl">When to use it</h2>
          <ul className="mt-5 space-y-3">
            {service.bestFor.map((item) => (
              <li key={item} className="border-l border-copper/70 pl-4 text-paper-dim">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-3xl">How the work actually runs</h2>
          <ol className="mt-5 space-y-4">
            {service.howItWorks.map((item, i) => (
              <li key={item} className="flex gap-4">
                <span className="font-mono text-copper-bright">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-paper-dim">{item}</span>
              </li>
            ))}
          </ol>
        </section>

        <dl className="mt-12 grid gap-4 sm:grid-cols-2">
          {service.facts.map((f) => (
            <div key={f.label} className="rounded-2xl border border-line bg-panel/60 p-5">
              <dt className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                {f.label}
              </dt>
              <dd className="mt-2 font-serif text-2xl">{f.value}</dd>
            </div>
          ))}
        </dl>

        <aside className="mt-12 rounded-2xl border border-copper/30 bg-copper/5 p-6">
          <h2 className="font-serif text-2xl">What usually goes wrong</h2>
          <p className="mt-3 leading-relaxed text-paper-dim">{service.watchouts}</p>
        </aside>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/quote"
            className="rounded-full bg-copper px-6 py-3 text-sm font-medium text-ink hover:bg-copper-bright"
          >
            Plan this mode
          </Link>
          <Link href="/#services" className="rounded-full border border-line px-6 py-3 text-sm">
            See all services
          </Link>
        </div>
      </article>
    </main>
  );
}
