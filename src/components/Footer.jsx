import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-rose-500 via-fuchsia-500 to-indigo-500" />
              <span className="text-lg font-semibold text-white">FlameStore</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-white/70">
              A modern marketplace for everyday essentials—where style meets comfort.
            </p>
            <div className="mt-4 flex items-center gap-2 text-white/70">
              <a className="inline-flex rounded-md border border-white/10 p-2 hover:text-white" href="#" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a className="inline-flex rounded-md border border-white/10 p-2 hover:text-white" href="#" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a className="inline-flex rounded-md border border-white/10 p-2 hover:text-white" href="#" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a className="inline-flex rounded-md border border-white/10 p-2 hover:text-white" href="#" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Shop</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">Men</a></li>
              <li><a href="#" className="hover:text-white">Women</a></li>
              <li><a href="#" className="hover:text-white">Accessories</a></li>
              <li><a href="#" className="hover:text-white">Collections</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Support</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Warranty</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Stay in the loop</h3>
            <p className="mt-3 text-sm text-white/70">Get product drops, exclusive offers, and more.</p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/50 outline-none"
              />
              <button className="rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} FlameStore. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-white/60">
            <a href="#" className="hover:text-white">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-white">Terms</a>
            <span>•</span>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
