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
        size="icon-sm"
        className={cn(
          "absolute right-3 top-3 z-10 border border-white/10 bg-[#02090A]/80 backdrop-blur-sm hover:bg-[#102620]",
          className
        )}
        onClick={handleClick}
      >
        <Heart
          className={cn(
            "h-4 w-4 transition-colors",
            inWishlist ? "fill-current text-[#36F4A4]" : "text-white/70"
          )}
        />
      </Button>
    );
  }

  return (
    <Button
      variant={inWishlist ? "secondary" : "outline"}
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
      {inWishlist ? "Saved to wishlist" : "Save for later"}
    </Button>
  );
}
