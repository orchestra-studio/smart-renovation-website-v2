import { awards, trustStats } from "@/data/site";

export function TrustBar() {
  return (
    <section className="bg-fg-grey text-fg-white">
      <div className="border-t border-fg-border">
        <div className="px-6 lg:px-10 overflow-x-auto">
          <div className="flex min-w-max lg:min-w-0 lg:grid lg:grid-cols-4 divide-x divide-fg-border">
            {trustStats.map((stat) => (
              <div key={stat.label} className="min-w-[12rem] px-5 lg:px-8 py-6 lg:py-7 text-center first:pl-0 last:pr-0">
                <p className="text-subheading text-fg-white">
                  {stat.decimals ? stat.value.toFixed(stat.decimals) : stat.value}
                  <span className="text-fg-text-muted">{stat.suffix}</span>
                </p>
                <p className="text-label text-fg-text-secondary mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-y border-fg-border py-3 overflow-hidden">
        <div className="px-6 lg:px-10">
          <div className="flex min-w-max lg:min-w-0 gap-8 lg:gap-10 justify-start lg:justify-center text-fg-text-muted text-label whitespace-nowrap">
            {awards.map((award) => (
              <span key={award}>{award}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
