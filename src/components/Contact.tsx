"use client";

export default function Contact() {
  return (
    <section id="contact" className="bg-dark py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:px-8">
        <div>
          <div className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-light-alt">
            Contact
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-light md:text-5xl">
            Get in touch
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-light md:text-lg">
            Planning a renovation in Dubai? Speak with our team to discuss your
            project, timeline, and next steps.
          </p>

          <div className="mt-12 space-y-6">
            <div className="border-b border-border-dark pb-6">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-light/60">
                Office
              </p>
              <p className="mt-2 text-lg text-light-alt">Business Bay</p>
            </div>

            <div className="border-b border-border-dark pb-6">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-light/60">
                Email
              </p>
              <a
                href="mailto:info@smartrenovation.ae"
                className="mt-2 inline-block text-lg text-light-alt transition-colors duration-300 hover:text-white"
              >
                info@smartrenovation.ae
              </a>
            </div>

            <div className="border-b border-border-dark pb-6">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-light/60">
                Telephone
              </p>
              <a
                href="tel:+971508506500"
                className="mt-2 inline-block text-lg text-light-alt transition-colors duration-300 hover:text-white"
              >
                +971 50 850 6500
              </a>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-light/60">
              Follow us
            </p>

            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-light-alt transition-colors duration-300 hover:bg-white hover:text-dark"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-light-alt transition-colors duration-300 hover:bg-white hover:text-dark"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path d="M7 9V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M12 17V12.8C12 10.7 13.4 9 15.4 9C17.5 9 18.5 10.4 18.5 12.4V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="7" cy="6.5" r="1.2" fill="currentColor" />
                </svg>
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-light-alt transition-colors duration-300 hover:bg-white hover:text-dark"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path d="M5 5L19 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M19 5L5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-mid p-8 shadow-[0_28px_80px_rgba(0,0,0,0.24)] md:p-10">
          <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-light">
                  Name <span className="text-accent">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-[10px] bg-light-alt px-4 py-3 text-dark outline-none transition ring-1 ring-transparent placeholder:text-muted/70 focus:ring-accent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-light">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-[10px] bg-light-alt px-4 py-3 text-dark outline-none transition ring-1 ring-transparent placeholder:text-muted/70 focus:ring-accent"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="text-sm font-medium text-light">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="mt-2 w-full rounded-[10px] bg-light-alt px-4 py-3 text-dark outline-none transition ring-1 ring-transparent placeholder:text-muted/70 focus:ring-accent"
                placeholder="+971"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-light">
                Message <span className="text-accent">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="mt-2 w-full rounded-[10px] bg-light-alt px-4 py-3 text-dark outline-none transition ring-1 ring-transparent placeholder:text-muted/70 focus:ring-accent"
                placeholder="Tell us about your renovation project"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-dark px-6 py-4 text-sm font-semibold text-light transition-transform duration-300 hover:-translate-y-0.5"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
