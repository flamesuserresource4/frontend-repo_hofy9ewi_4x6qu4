import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black to-[#07050d]">
      {/* Background accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 right-1/3 h-[500px] w-[700px] rounded-full bg-indigo-500/20 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
            >
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              New drop: Pro-grade PC gear
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Build your dream setup
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
            >
              From blazing-fast laptops to precision peripherals and components—curated for performance, reliability, and style.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:scale-[1.02] hover:opacity-95 active:scale-[0.98]"
              >
                Shop Computers & Gear
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:border-white/20"
              >
                Why FlameStore
              </a>
            </motion.div>

            <motion.dl
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.08 } },
              }}
              className="mt-10 grid grid-cols-3 gap-4 text-center sm:max-w-md"
            >
              {[
                ['Lightning delivery', '2-4 days'],
                ['Warranty included', 'Up to 2 yrs'],
                ['Secure checkout', '256-bit'],
              ].map(([k, v]) => (
                <motion.div
                  key={k}
                  variants={{ hidden: { y: 8, opacity: 0 }, show: { y: 0, opacity: 1 } }}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-3"
                >
                  <dt className="text-xs text-white/60">{k}</dt>
                  <dd className="mt-1 text-lg font-semibold text-white">{v}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>

          {/* Visual with Spline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl sm:h-[520px] lg:h-[560px]"
          >
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
