import { useMemo, useState } from 'react';
import { Heart, Star } from 'lucide-react';

const products = [
  {
    id: 'p1',
    title: 'AeroFlex Running Shoes',
    price: 129,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop',
    badge: 'New',
    category: 'Shoes',
  },
  {
    id: 'p2',
    title: 'CloudWeave Hoodie',
    price: 89,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1600&auto=format&fit=crop',
    badge: 'Bestseller',
    category: 'Apparel',
  },
  {
    id: 'p3',
    title: 'Minimalist Watch',
    price: 169,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1600&auto=format&fit=crop',
    badge: 'Limited',
    category: 'Accessories',
  },
  {
    id: 'p4',
    title: 'Everyday Backpack',
    price: 119,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1600&auto=format&fit=crop',
    badge: 'New',
    category: 'Accessories',
  },
  {
    id: 'p5',
    title: 'Signature Tee',
    price: 35,
    rating: 4.4,
    image:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
    badge: 'Sale',
    category: 'Apparel',
  },
  {
    id: 'p6',
    title: 'Ultralight Jacket',
    price: 149,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
    badge: 'Bestseller',
    category: 'Apparel',
  },
];

const categories = ['All', 'Apparel', 'Shoes', 'Accessories'];

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
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Featured Products</h2>
            <p className="mt-2 text-sm text-white/70">Carefully selected picks loved by our community.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-3 py-1.5 text-xs transition ${
                  active === c
                    ? 'border-transparent bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white shadow'
                    : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article key={p.id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-fuchsia-500/10">
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

                <button className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 px-3 py-2 text-sm font-semibold text-white transition hover:opacity-95">
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
