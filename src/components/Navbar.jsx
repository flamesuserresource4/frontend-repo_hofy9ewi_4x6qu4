import { useState } from 'react';
import { ShoppingCart, Search, Heart, Menu, X, User } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Brand */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-rose-500 via-fuchsia-500 to-indigo-500" />
            <span className="text-lg font-semibold tracking-tight text-white">FlameStore</span>
          </div>

          {/* Center: Search */}
          <div className="hidden md:flex flex-1 items-center justify-center px-6">
            <div className="relative w-full max-w-xl">
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
              <input
                type="text"
                placeholder="Search for products, brands, and more"
                className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder-white/50 outline-none transition focus:border-fuchsia-400/50"
              />
            </div>
          </div>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10">
              <User className="h-4 w-4 text-white/70" />
              <span className="hidden lg:inline">Account</span>
            </button>
            <button className="relative inline-flex items-center rounded-xl border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10">
              <Heart className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-rose-500 px-1.5 text-[10px] font-semibold leading-none text-white shadow-lg">3</span>
            </button>
            <button className="relative inline-flex items-center rounded-xl border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10">
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-fuchsia-500 px-1.5 text-[10px] font-semibold leading-none text-white shadow-lg">2</span>
            </button>
          </div>

          {/* Mobile */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile panel */}
        {mobileOpen && (
          <div className="md:hidden pb-4">
            <div className="relative mt-3">
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
              <input
                type="text"
                placeholder="Search products"
                className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder-white/50 outline-none"
              />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {['New Arrivals', 'Best Sellers', 'Men', 'Women', 'Accessories', 'Sale'].map((item) => (
                <button
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-left text-sm text-white/80 hover:bg-white/10"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-3">
              <button className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">Account</button>
              <button className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">Cart</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
