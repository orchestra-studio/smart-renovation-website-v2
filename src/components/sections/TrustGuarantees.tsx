const guarantees = [
  "Free site visit",
  "Fixed-price quote",
  "On-time delivery guaranteed",
  "No obligation",
];

export function TrustGuarantees() {
  return (
    <section className="bg-fg-grey text-fg-white pb-0">
      <div className="px-6 lg:px-10 pb-6 lg:pb-10">
        <div className="border-t border-fg-border pt-5 lg:pt-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((item) => (
              <div key={item} className="flex items-center gap-3 text-label text-fg-text-secondary">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-fg-accent/40 text-fg-accent">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                    <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
