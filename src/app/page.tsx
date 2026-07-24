export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 py-24 text-zinc-950 dark:bg-zinc-950 dark:text-white">
      <section className="w-full max-w-2xl rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Next.js + Tailwind CSS
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Your project is ready.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          Start building your next idea with the App Router, TypeScript, and
          utility-first styling.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-600 dark:text-zinc-300">
          <span className="rounded-full bg-blue-50 px-4 py-2 dark:bg-blue-950/50">TypeScript</span>
          <span className="rounded-full bg-blue-50 px-4 py-2 dark:bg-blue-950/50">App Router</span>
          <span className="rounded-full bg-blue-50 px-4 py-2 dark:bg-blue-950/50">Tailwind CSS</span>
        </div>
      </section>
    </main>
  );
}
