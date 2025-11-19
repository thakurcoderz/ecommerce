"use client";

import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WishlistButton } from "@/components/wishlist-button";
import { Star, ShoppingCart } from "lucide-react";
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
    e.preventDefault(); // Prevent navigation to product page
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
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl border-muted flex flex-col">
        <div className="aspect-square relative overflow-hidden bg-muted">
          <WishlistButton product={product} />
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          {product.price > 200 && (
            <Badge className="absolute top-3 left-3 bg-black/70 hover:bg-black/80 text-white backdrop-blur-sm border-0">
              Premium
            </Badge>
          )}

          {/* Quick Add Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent">
            <Button
              onClick={handleAddToCart}
              className="w-full bg-white text-black hover:bg-white/90 shadow-lg"
              size="sm"
            >
              {isAdded ? (
                <span className="flex items-center gap-2">Added <span className="text-green-600">✓</span></span>
              ) : (
                <span className="flex items-center gap-2"><ShoppingCart className="h-4 w-4" /> Quick Add</span>
              )}
            </Button>
          </div>
        </div>

        <CardHeader className="p-4 pb-0">
          <div className="flex flex-col gap-1.5">
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{product.category}</p>
            <CardTitle className="line-clamp-1 text-base font-semibold group-hover:text-primary transition-colors leading-tight">
              {product.name}
            </CardTitle>
            {/* Mock Rating */}
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-xs text-muted-foreground ml-1">(4.8)</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0 flex-grow" />

        <CardFooter className="p-4 pt-0 mt-auto flex items-center justify-between">
          <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
          <Button variant="ghost" size="sm" className="text-xs h-8 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
            View Details
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
