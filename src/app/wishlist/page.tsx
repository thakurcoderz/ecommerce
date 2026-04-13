"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { useWishlist } from "@/lib/wishlist-store";
import { useCart } from "@/lib/cart-store";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { TheaterPanel } from "@/components/ui/theater-panel";
import { EmptyStatePanel } from "@/components/ui/empty-state-panel";

export default function WishlistPage() {
  const { items, removeItem, clearWishlist } = useWishlist();
  const { addItem: addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

  const handleAddToCart = (item: (typeof items)[number]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
    setAddedItems((previous) => new Set([...previous, item.id]));
    setTimeout(() => {
      setAddedItems((previous) => {
        const next = new Set(previous);
        next.delete(item.id);
        return next;
      });
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="page-shell py-20">
        <EmptyStatePanel
          icon={<Heart className="h-8 w-8 text-[#36F4A4]" />}
          title="Your wishlist is empty"
          description="Save products you want to revisit later. They&apos;ll stay here in a cleaner, calmer shortlist."
          actions={
            <Link href="/products">
              <Button size="lg">Discover products</Button>
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <div className="page-shell py-12 md:py-16 lg:py-20">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Wishlist"
          title="Saved pieces worth revisiting."
          description="Keep a shortlist of products you love, then move them into your cart when the time feels right."
          className="max-w-2xl"
        />
        <Button variant="outline" onClick={clearWishlist}>
          <Trash2 className="h-4 w-4" />
          Clear all
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <TheaterPanel key={item.id} className="group overflow-hidden rounded-[28px] p-0">
            <div className="relative overflow-hidden">
              <Button
                variant="ghost"
                size="icon-sm"
                className="absolute right-3 top-3 z-10 border border-white/10 bg-[#02090A]/80"
                onClick={() => removeItem(item.id)}
              >
                <Heart className="h-4 w-4 fill-current text-[#36F4A4]" />
                <span className="sr-only">Remove from wishlist</span>
              </Button>

              <Link href={`/products/${item.id}`} className="block">
                <div className="relative aspect-[4/4.5] w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
            </div>

            <div className="space-y-4 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <Badge className="rounded-md px-3 py-1 text-[10px] tracking-[0.18em]">{item.category}</Badge>
                  <Link href={`/products/${item.id}`}>
                    <h2 className="mt-3 line-clamp-1 text-[1.2rem] font-[340] tracking-[-0.03em] text-white transition-colors group-hover:text-[#C1FBD4]">
                      {item.name}
                    </h2>
                  </Link>
                </div>
                <p className="number-display text-3xl text-white">${item.price.toFixed(2)}</p>
              </div>

              <p className="line-clamp-2 text-sm leading-7 text-muted-foreground">{item.description}</p>

              <Button
                className="w-full"
                size="sm"
                onClick={() => handleAddToCart(item)}
                disabled={addedItems.has(item.id)}
              >
                {addedItems.has(item.id) ? (
                  "Added to cart"
                ) : (
                  <>
                    <ShoppingCart className="h-4 w-4" />
                    Add to cart
                  </>
                )}
              </Button>
            </div>
          </TheaterPanel>
        ))}
      </div>
    </div>
  );
}
