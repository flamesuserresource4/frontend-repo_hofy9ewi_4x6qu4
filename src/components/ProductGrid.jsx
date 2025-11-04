import { useMemo, useState } from 'react';
import { Heart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 'l1',
    title: 'Nebula X15 Gaming Laptop (RTX 4070)',
    price: 1899,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop',
    badge: 'Bestseller',
    category: 'Laptops',
  },
  {
    id: 'd1',
    title: 'Aegis Pro Desktop (Ryzen 9, RTX 4080)',
    price: 2499,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    badge: 'Limited',
    category: 'Desktops',
  },
  {
    id: 'm1',
    title: 'CrystalView 27" 165Hz QHD Monitor',
    price: 349,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop',
    badge: 'New',
    category: 'Monitors',
  },
  {
    id: 'p1',
    title: 'Flux RGB Mechanical Keyboard (Hot-swappable)',
    price: 129,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop',
    badge: 'Bestseller',
    category: 'Peripherals',
  },
  {
    id: 'p2',
    title: 'Glide Pro Wireless Mouse',
    price: 79,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1587825140400-9e43f66293d4?q=80&w=1600&auto=format&fit=crop',
    badge: 'New',
    category: 'Peripherals',
  },
  {
    id: 'c1',
    title: 'Eclipse 1TB NVMe Gen4 SSD',
    price: 99,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    badge: 'Hot',
    category: 'Components',
  },
  {
    id: 'c2',
    title: 'Spectra RTX 4070 Ti GPU',
    price: 799,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1555617117-08c5d9365a9a?q=80&w=1600&auto=format&fit=crop',
    badge: 'Limited',
    category: 'Components',
  },
  {
    id: 'n1',
    title: 'AeroLink AX5400 Wi‑Fi 6 Router',
    price: 159,
    rating: 4.4,
    image:
      'https://images.unsplash.com/photo-1587202372775-98927b43579a?q=80&w=1600&auto=format&fit=crop',
    badge: 'New',
    category: 'Networking',
  },
  {
    id: 'a1',
    title: 'Nimbus 7.1 Surround Gaming Headset',
    price: 149,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1518449007433-1517b8a3b155?q=80&w=1600&auto=format&fit=crop',
    badge: 'Bestseller',
    category: 'Peripherals',
  },
];

const categories = ['All', 'Laptops', 'Desktops', 'Monitors', 'Peripherals', 'Components', 'Networking'];

export default function ProductGrid() {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return products;
    return products.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="products" className="relative bg-[#09030f] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              Featured Tech
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-2 text-sm text-white/70"
            >
              High-performance computers and accessories loved by our community.
            </motion.p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <motion.button
                key={c}
                onClick={() => setActive(c)}
                whileTap={{ scale: 0.98 }}
                whileHover={{ y: -1 }}
                className={`rounded-full border px-3 py-1.5 text-xs transition ${
                  active === c
                    ? 'border-transparent bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white shadow'
                    : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10'
                }`}
              >
                {c}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((p) => (
            <motion.article
              key={p.id}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -3 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition shadow-sm"
            >
              <div className="relative">
                <img src={p.image} alt={p.title} className="h-56 w-full object-cover" loading="lazy" />
                <span className="absolute left-3 top-3 inline-flex rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur">
                  {p.badge}
                </span>
                <button className="absolute right-3 top-3 inline-flex rounded-full bg-black/60 p-2 text-white backdrop-blur transition hover:bg-black/80">
                  <Heart className="h-4 w-4" />
                </button>
              </div>

              <div className="p-4">
                <h3 className="line-clamp-1 text-sm font-semibold text-white">{p.title}</h3>
                <div className="mt-1 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-yellow-300">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-3.5 w-3.5 ${i < Math.round(p.rating) ? '' : 'opacity-30'}`} fill="currentColor" />
                    ))}
                    <span className="ml-1 text-[11px] text-white/70">{p.rating.toFixed(1)}</span>
                  </div>
                  <p className="text-sm font-semibold text-white">${p.price}</p>
                </div>

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ scale: 1.01 }}
                  className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 px-3 py-2 text-sm font-semibold text-white transition"
                >
                  Add to cart
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
