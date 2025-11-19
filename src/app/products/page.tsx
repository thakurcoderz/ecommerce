"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WishlistButton } from "@/components/wishlist-button";
import { ProductCard } from "@/components/product-card";
import { Suspense } from "react";

function ProductGrid() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <div className="container py-10 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            {category ? `${category}` : "All Products"}
          </h1>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/products">
            <Button variant={!category ? "secondary" : "ghost"} size="sm">
              All
            </Button>
          </Link>
          <Link href="/products?category=Electronics">
            <Button variant={category === "Electronics" ? "secondary" : "ghost"} size="sm">
              Electronics
            </Button>
          </Link>
          <Link href="/products?category=Accessories">
            <Button variant={category === "Accessories" ? "secondary" : "ghost"} size="sm">
              Accessories
            </Button>
          </Link>
          <Link href="/products?category=Furniture">
            <Button variant={category === "Furniture" ? "secondary" : "ghost"} size="sm">
              Furniture
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">No products found in this category.</p>
          <Link href="/products" className="mt-4 inline-block">
            <Button>View All Products</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="container py-10">Loading products...</div>}>
      <ProductGrid />
    </Suspense>
  );
}
