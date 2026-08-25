import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid-sea flex min-h-svh items-center px-6">
      <div>
        <p className="kicker">404</p>
        <h1 className="display mt-4 text-5xl">This lane is empty.</h1>
        <Link href="/" className="mt-6 inline-block text-copper-bright">
          Return to the briefing
        </Link>
      </div>
    </main>
  );
}
