import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#02090A]/80">
      <div className="page-shell py-20 md:py-24">
        <div className="theater-card mb-12 rounded-[28px] px-6 py-8 md:px-10 md:py-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <div className="glass-badge inline-flex rounded-full px-4 py-2 text-sm tracking-[0.18em] text-white/90 uppercase">
                Commerce in a cinematic frame
              </div>
              <h2 className="section-display max-w-xl">Build a calmer, sharper storefront experience.</h2>
              <p className="lead-copy max-w-xl">
                Explore premium products, save favorites, and move from discovery to checkout with a dark luxury interface.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/products">
                <Button size="lg">
                  Browse catalog
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/signup">
                <Button variant="outline" size="lg">Create account</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-10 border-t border-white/8 pt-12 md:grid-cols-[1.4fr_repeat(3,minmax(0,1fr))]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/6">
                <Sparkles className="h-4 w-4 text-[#36F4A4]" />
              </div>
              <span className="text-lg font-medium tracking-[0.16em] uppercase text-white">LuxeStore</span>
            </div>
            <p className="max-w-sm text-sm leading-7 text-muted-foreground">
              Premium essentials for modern living, styled with a dark-first storefront inspired by keynote-level polish.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm uppercase tracking-[0.24em] text-white/92">Shop</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/products" className="hover:text-white">All products</Link></li>
              <li><Link href="/products?category=Electronics" className="hover:text-white">Electronics</Link></li>
              <li><Link href="/products?category=Accessories" className="hover:text-white">Accessories</Link></li>
              <li><Link href="/products?category=Furniture" className="hover:text-white">Furniture</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm uppercase tracking-[0.24em] text-white/92">Account</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/cart" className="hover:text-white">Cart</Link></li>
              <li><Link href="/wishlist" className="hover:text-white">Wishlist</Link></li>
              <li><Link href="/login" className="hover:text-white">Sign in</Link></li>
              <li><Link href="/signup" className="hover:text-white">Create account</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm uppercase tracking-[0.24em] text-white/92">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/terms" className="hover:text-white">Terms of service</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/8 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 LuxeStore. All rights reserved.</p>
          <p>Designed for dramatic contrast, precise motion, and calm commerce.</p>
        </div>
      </div>
    </footer>
  );
}
