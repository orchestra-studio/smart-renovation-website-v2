import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-fg-grey text-fg-white min-h-[80svh] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-label text-fg-text-muted mb-6">404</p>
        <h1 className="text-hero mb-6">Page not found</h1>
        <p className="text-body text-fg-text-secondary mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="text-label bg-fg-white text-fg-grey px-6 py-3 inline-block transition-opacity hover:opacity-90"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
