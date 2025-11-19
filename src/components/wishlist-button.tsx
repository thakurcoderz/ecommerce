"use client";

import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/lib/wishlist-store";
import { cn } from "@/lib/utils";

type WishlistButtonProps = {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
  };
  variant?: "default" | "icon";
  className?: string;
};

export function WishlistButton({ product, variant = "icon", className }: WishlistButtonProps) {
  const { addItem, removeItem, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (inWishlist) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  };

  if (variant === "icon") {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "absolute top-2 right-2 z-10 bg-background/80 hover:bg-background rounded-full transition-all",
          className
        )}
        onClick={handleClick}
      >
        <Heart
          className={cn(
            "h-5 w-5 transition-colors",
            inWishlist ? "fill-current text-red-500" : "text-muted-foreground"
          )}
        />
      </Button>
    );
  }

  return (
    <Button
      variant={inWishlist ? "default" : "outline"}
      size="lg"
      className={cn("w-full md:w-auto", className)}
      onClick={handleClick}
    >
      <Heart
        className={cn(
          "mr-2 h-5 w-5",
          inWishlist && "fill-current"
        )}
      />
      {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
    </Button>
  );
}
