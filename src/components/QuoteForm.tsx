"use client";

import { FormEvent, useState } from "react";

const modes = [
  "Not sure — recommend a mode",
  "Air freight",
  "Ocean freight",
  "Surface / truck / rail",
  "Mixed / multimodal",
];

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-line bg-panel/70 p-8 md:p-12">
        <p className="kicker">Received</p>
        <h2 className="display mt-4 text-4xl">We have the outline of your move.</h2>
        <p className="mt-4 max-w-xl text-paper-dim">
          A planner will reply with a recommended mode, a document checklist, and
          any questions we still need — origin ready date, Incoterms, and cargo
          details if they were left blank.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-line bg-panel/70 p-6 md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Company" name="company" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <Field label="Origin city / country" name="origin" required />
        <Field label="Destination city / country" name="destination" required />
        <label className="block md:col-span-2">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
            Preferred mode
          </span>
          <select
            name="mode"
            className="mt-2 w-full rounded-xl border border-line bg-ink px-4 py-3 text-paper outline-none focus:border-copper"
            defaultValue={modes[0]}
          >
            {modes.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </label>
        <label className="block md:col-span-2">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
            Cargo notes
          </span>
          <textarea
            name="notes"
            rows={5}
            placeholder="Commodity, weight or CBM, ready date, temperature or hazardous notes, Incoterms if known."
            className="mt-2 w-full rounded-xl border border-line bg-ink px-4 py-3 text-paper outline-none placeholder:text-muted/70 focus:border-copper"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-8 rounded-full bg-copper px-7 py-3 text-sm font-medium text-ink hover:bg-copper-bright"
      >
        Send the briefing request
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-line bg-ink px-4 py-3 text-paper outline-none focus:border-copper"
      />
    </label>
  );
}
