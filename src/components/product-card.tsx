"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WishlistButton } from "@/components/wishlist-button";
import { Star, ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <Link href={`/products/${product.id}`} className="group block h-full">
      <Card className="h-full overflow-hidden rounded-2xl p-0 transition-transform duration-300 hover:-translate-y-1">
        <div className="relative aspect-[4/4.7] overflow-hidden bg-[#061A1C]">
          <WishlistButton product={product} />
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02090A] via-[#02090A]/18 to-transparent" />

          <div className="absolute left-3 top-3 flex items-center gap-2">
            <Badge className="rounded-md px-3 py-1 text-[10px] tracking-[0.18em]">{product.category}</Badge>
            {product.price > 200 && (
              <Badge variant="destructive" className="rounded-md px-3 py-1 text-[10px] tracking-[0.18em]">
                Premium
              </Badge>
            )}
          </div>

          <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <Button onClick={handleAddToCart} className="w-full" size="sm">
              {isAdded ? (
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4" /> Added to cart
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4" /> Quick add
                </span>
              )}
            </Button>
          </div>
        </div>

        <CardHeader className="gap-3 p-5 pb-1">
          <div className="flex items-center gap-1 text-[#C1FBD4]">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-3.5 w-3.5 fill-current" />
            ))}
            <span className="ml-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">4.8/5 verified</span>
          </div>
          <div className="space-y-2">
            <CardTitle className="line-clamp-1 text-[1.05rem] font-[360] leading-tight text-white transition-colors group-hover:text-[#C1FBD4]">
              {product.name}
            </CardTitle>
            <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">{product.description}</p>
          </div>
        </CardHeader>

        <CardFooter className="mt-auto items-end justify-between gap-3 p-5 pt-5">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Starting at</p>
            <p className="number-display text-[2rem] text-white">${product.price.toFixed(2)}</p>
          </div>
          <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/80 transition-colors group-hover:bg-white group-hover:text-black">
            View details
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
