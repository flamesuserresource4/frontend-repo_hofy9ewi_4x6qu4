import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black to-[#0b0514]">
      {/* Background accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 right-1/3 h-[500px] w-[700px] rounded-full bg-indigo-500/20 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Star className="h-3.5 w-3.5 text-yellow-400" />
              Handpicked styles for the season
            </div>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Elevate your everyday with modern essentials
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Discover a curated collection of premium apparel, accessories, and lifestyle products. Designed to look great, built to last.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:opacity-95"
              >
                Shop New Arrivals
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                Why Choose Us
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 text-center sm:max-w-md">
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                <dt className="text-xs text-white/60">Premium Quality</dt>
                <dd className="mt-1 text-lg font-semibold text-white">Top-tier</dd>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                <dt className="text-xs text-white/60">Fast Shipping</dt>
                <dd className="mt-1 text-lg font-semibold text-white">2-4 days</dd>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                <dt className="text-xs text-white/60">Secure Checkout</dt>
                <dd className="mt-1 text-lg font-semibold text-white">256-bit</dd>
              </div>
            </dl>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1600&auto=format&fit=crop"
                alt="Hero"
                className="h-[420px] w-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
              {[
                'Free returns within 30 days',
                'Sustainably sourced materials',
                '24/7 customer support',
              ].map((t) => (
                <div key={t} className="rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-center text-xs text-white/80 backdrop-blur">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
