import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        {/* Features section */}
        <section id="features" className="relative bg-[#09030f] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Built for a delightful shopping experience</h2>
              <p className="mt-2 text-sm text-white/70">From discovery to delivery, every step is smooth, secure, and fast.</p>
            </motion.div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: 'Expertly Curated Gear',
                  desc: 'Top-tier laptops, desktops, and accessories chosen by enthusiasts.',
                },
                {
                  title: 'Fast, Tracked Shipping',
                  desc: 'Reliable delivery with real-time tracking and updates.',
                },
                {
                  title: 'Secure Payments',
                  desc: 'Industry-grade encryption for a worry-free checkout.',
                },
                {
                  title: 'Hassle-free Returns',
                  desc: 'Not in love? Return within 30 days—no questions asked.',
                },
              ].map((f) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-white shadow-sm"
                >
                  <h3 className="text-base font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
