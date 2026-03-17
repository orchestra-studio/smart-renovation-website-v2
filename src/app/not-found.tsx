import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-sr-dark px-6">
      <div className="text-center">
        <p className="font-heading text-8xl font-light text-sr-gold/20">404</p>
        <h1 className="mt-4 font-heading text-3xl font-light text-sr-cream">Page Not Found</h1>
        <p className="mt-4 text-sr-text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-sr-gold px-8 py-3 text-sm font-semibold uppercase tracking-widest text-sr-dark transition-all hover:bg-sr-gold-hover"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
