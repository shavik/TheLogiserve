import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Request a shipment plan",
  description:
    "Share origin, destination, and cargo notes. TheLogiserve will recommend a mode and a document path.",
};

export default function QuotePage() {
  return (
    <main className="grid-sea relative min-h-svh px-5 pt-28 pb-20 md:px-10">
      <div className="grain" />
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="kicker">Briefing request</p>
          <h1 className="display mt-4 text-5xl sm:text-6xl">Start with the facts of the cargo.</h1>
          <p className="mt-6 text-lg leading-relaxed text-paper-dim">
            We do not need a perfect file to recommend a mode. Origin, destination,
            ready date, and an honest description of the goods are enough to choose
            between air, ocean, and surface — and to flag customs work early.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-paper-dim">
            <li>Air if time is the constraint and the cargo can fly.</li>
            <li>Ocean if volume and cost matter more than days.</li>
            <li>Surface for domestic, regional, and every first and last mile.</li>
            <li>Forwarding to keep the handoffs on one plan.</li>
            <li>Clearance so the cargo can legally leave the terminal.</li>
          </ul>
        </div>
        <QuoteForm />
      </div>
    </main>
  );
}
