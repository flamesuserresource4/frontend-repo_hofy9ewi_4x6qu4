import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

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
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Built for a delightful shopping experience</h2>
              <p className="mt-2 text-sm text-white/70">From discovery to delivery, every step is smooth, secure, and fast.</p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: 'Curated Collections',
                  desc: 'Handpicked products with uncompromised quality and style.',
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
                <div
                  key={f.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-white shadow-sm"
                >
                  <h3 className="text-base font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{f.desc}</p>
                </div>
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
