"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, ShoppingCart, Sparkles, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/lib/cart-store";
import { useWishlist } from "@/lib/wishlist-store";
import { Badge } from "@/components/ui/badge";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/products?category=Electronics", label: "Electronics" },
  { href: "/products?category=Accessories", label: "Accessories" },
  { href: "/wishlist", label: "Wishlist" },
];

export function Navbar() {
  const { itemCount } = useCart();
  const { itemCount: wishlistCount } = useWishlist();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsHydrated(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-3 sm:px-6 lg:px-8">
      <div
        className={[
          "mx-auto flex h-16 max-w-[1280px] items-center justify-between rounded-full border px-4 transition-all duration-300 sm:px-6",
          isScrolled
            ? "border-white/10 bg-[#102620]/90 shadow-[rgba(0,0,0,0.24)_0px_18px_40px_-18px] backdrop-blur-xl"
            : "border-white/8 bg-[#02090A]/70 backdrop-blur-md",
        ].join(" ")}
      >
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/6">
              <Sparkles className="h-4 w-4 text-[#36F4A4]" />
            </div>
            <div>
              <span className="block text-base font-medium tracking-[0.18em] text-white uppercase">LuxeStore</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-[18px] font-[500] tracking-[0.04em] text-white/72 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/login" className="hidden md:block">
            <Button variant="ghost" size="icon-sm" className="border border-white/10 bg-transparent">
              <User className="h-4 w-4" />
              <span className="sr-only">User account</span>
            </Button>
          </Link>

          <Link href="/wishlist">
            <Button variant="ghost" size="icon-sm" className="relative border border-white/10 bg-transparent">
              <Heart className="h-4 w-4" />
              {isHydrated && wishlistCount > 0 && (
                <Badge className="absolute -right-1.5 -top-1.5 h-5 min-w-5 rounded-full px-1.5 py-0 text-[10px] tracking-normal">
                  {wishlistCount}
                </Badge>
              )}
              <span className="sr-only">Wishlist</span>
            </Button>
          </Link>

          <Link href="/cart">
            <Button variant="ghost" size="icon-sm" className="relative border border-white/10 bg-transparent">
              <ShoppingCart className="h-4 w-4" />
              {isHydrated && itemCount > 0 && (
                <Badge className="absolute -right-1.5 -top-1.5 h-5 min-w-5 rounded-full px-1.5 py-0 text-[10px] tracking-normal">
                  {itemCount}
                </Badge>
              )}
              <span className="sr-only">Shopping cart</span>
            </Button>
          </Link>

          <Link href="/signup" className="hidden md:block">
            <Button size="sm">Start for free</Button>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon-sm" className="border border-white/10 bg-transparent lg:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader className="border-b border-white/8 pb-6">
                <SheetTitle className="text-2xl">LuxeStore</SheetTitle>
                <SheetDescription>
                  Browse premium products with a calm, dark-first shopping flow.
                </SheetDescription>
              </SheetHeader>

              <nav className="flex flex-col gap-3 px-6 pb-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-base text-white/90 transition-colors hover:bg-white/8"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/login" className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-base text-white/90 transition-colors hover:bg-white/8">
                  Sign in
                </Link>
                <Link href="/signup" className="pt-2">
                  <Button className="w-full">Start for free</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
