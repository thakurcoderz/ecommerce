"use client";

import Link from "next/link";
import { useWishlist } from "@/lib/wishlist-store";
import { useCart } from "@/lib/cart-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { useState } from "react";

export default function WishlistPage() {
  const { items, removeItem, clearWishlist } = useWishlist();
  const { addItem: addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
    setAddedItems(prev => new Set([...prev, item.id]));
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(item.id);
        return newSet;
      });
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center max-w-2xl mx-auto px-4">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-muted p-6">
            <Heart className="h-16 w-16 text-muted-foreground" />
          </div>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Your Wishlist is Empty</h1>
        <p className="text-muted-foreground mb-8">
          Save items you like to your wishlist. Review them anytime and easily add them to your cart.
        </p>
        <Link href="/products">
          <Button size="lg">Discover Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-10 px-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">My Wishlist</h1>
          <p className="text-muted-foreground mt-2">
            {items.length} {items.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>
        <Button variant="outline" onClick={clearWishlist} className="text-muted-foreground">
          <Trash2 className="mr-2 h-4 w-4" />
          Clear All
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <Card key={item.id} className="group overflow-hidden transition-all hover:shadow-lg border-muted relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 bg-background/80 hover:bg-background rounded-full"
              onClick={() => removeItem(item.id)}
            >
              <Heart className="h-5 w-5 fill-current text-red-500" />
            </Button>

            <Link href={`/products/${item.id}`}>
              <div className="aspect-square relative overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            <CardContent className="p-5">
              <Link href={`/products/${item.id}`}>
                <h3 className="font-semibold text-lg mb-1 line-clamp-1 hover:text-primary transition-colors">
                  {item.name}
                </h3>
              </Link>
              <p className="text-sm text-muted-foreground mb-3">{item.category}</p>
              <p className="font-bold text-xl mb-4">${item.price.toFixed(2)}</p>

              <Button
                className="w-full"
                size="sm"
                onClick={() => handleAddToCart(item)}
                disabled={addedItems.has(item.id)}
              >
                {addedItems.has(item.id) ? (
                  <>✓ Added</>
                ) : (
                  <>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
