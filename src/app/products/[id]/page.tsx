"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Check, Star, Truck, Shield, RefreshCw, Package, ArrowLeft } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { WishlistButton } from "@/components/wishlist-button";
import { Separator } from "@/components/ui/separator";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { TheaterPanel } from "@/components/ui/theater-panel";
import { EmptyStatePanel } from "@/components/ui/empty-state-panel";

const featurePoints = [
  "Premium materials and meticulous construction",
  "1-year manufacturer warranty included",
  "Free shipping on orders over $50",
  "30-day money-back guarantee",
];

const reviewData = [
  {
    name: "Sarah Johnson",
    rating: 5,
    date: "2 weeks ago",
    review: "Absolutely love this product. The build quality feels exceptional and the experience matches the presentation.",
  },
  {
    name: "Michael Chen",
    rating: 5,
    date: "1 month ago",
    review: "Fast delivery, thoughtful packaging, and a product that looks even better in person.",
  },
  {
    name: "Emma Davis",
    rating: 4,
    date: "2 months ago",
    review: "Well made and easy to recommend. I would happily order from this collection again.",
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const product = products.find((entry) => entry.id === params.id);

  if (!product) {
    return (
      <div className="page-shell py-20">
        <EmptyStatePanel
          title="Product not found"
          description="The product you selected is no longer available in this catalog view."
          actions={
            <Button onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4" />
              Go back
            </Button>
          }
        />
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const relatedProducts = products
    .filter((entry) => entry.category === product.category && entry.id !== product.id)
    .slice(0, 3);

  return (
    <div className="page-shell py-12 md:py-16 lg:py-20">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        <Link href="/products" className="hover:text-white">Products</Link>
        <span>/</span>
        <span>{product.category}</span>
        <span>/</span>
        <span className="text-white">{product.name}</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <TheaterPanel className="rounded-[32px] p-4 md:p-5">
          <div className="relative aspect-square overflow-hidden rounded-[28px] border border-white/8 bg-[#061A1C]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((thumbnail) => (
              <div key={thumbnail} className="relative aspect-square overflow-hidden rounded-2xl border border-white/8 bg-[#061A1C]">
                <Image
                  src={product.image}
                  alt={`${product.name} view ${thumbnail}`}
                  fill
                  sizes="(max-width: 1024px) 25vw, 12vw"
                  className="object-cover opacity-80 transition-opacity hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </TheaterPanel>

        <div className="space-y-8">
          <div className="space-y-4">
            <Badge className="rounded-md px-4 py-2 text-xs tracking-[0.22em]">{product.category}</Badge>
            <h1 className="section-display">{product.name}</h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1 text-[#C1FBD4]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-white">4.9</span>
              <span>(128 reviews)</span>
            </div>
            <p className="number-display text-6xl text-white">${product.price.toFixed(2)}</p>
            <p className="lead-copy">{product.description}</p>
          </div>

          <TheaterPanel className="rounded-[28px] p-6">
            <p className="eyebrow">Included with every order</p>
            <div className="mt-5 space-y-4">
              {featurePoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#36F4A4]/30 bg-[#36F4A4]/12">
                    <Check className="h-3.5 w-3.5 text-[#36F4A4]" />
                  </div>
                  <p className="text-sm leading-7 text-white/84">{point}</p>
                </div>
              ))}
            </div>
          </TheaterPanel>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="flex-1" onClick={handleAddToCart} disabled={isAdded}>
              {isAdded ? (
                <>
                  <Check className="h-5 w-5" /> Added to cart
                </>
              ) : (
                <>
                  <ShoppingCart className="h-5 w-5" /> Add to cart
                </>
              )}
            </Button>
            <WishlistButton product={product} variant="default" className="sm:w-auto" />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: Truck, title: "Free shipping", text: "Orders over $50" },
              { icon: Shield, title: "Secure payment", text: "Protected checkout" },
              { icon: RefreshCw, title: "Easy returns", text: "30-day policy" },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <TheaterPanel key={item.title} className="rounded-[24px] p-5">
                  <Icon className="h-5 w-5 text-[#36F4A4]" />
                  <p className="mt-4 text-base text-white">{item.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                </TheaterPanel>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-4">
        {[
          { icon: Truck, title: "Free shipping", text: "On orders over $50" },
          { icon: Shield, title: "Secure payment", text: "Protected by trusted processors" },
          { icon: RefreshCw, title: "Easy returns", text: "Clear 30-day policy" },
          { icon: Package, title: "1-year warranty", text: "Coverage for daily confidence" },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <TheaterPanel key={item.title} className="rounded-[24px] p-6">
              <Icon className="h-6 w-6 text-[#36F4A4]" />
              <h3 className="mt-4 text-lg font-[340] tracking-[-0.03em] text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.text}</p>
            </TheaterPanel>
          );
        })}
      </div>

      <div className="mt-16">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:w-auto">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <TheaterPanel className="rounded-[28px] p-6 md:p-8">
              <h3 className="text-3xl font-[340] tracking-[-0.04em] text-white">Product description</h3>
              <div className="mt-5 space-y-4 text-sm leading-8 text-white/82">
                <p>{product.description}</p>
                <p>
                  This product balances contemporary functionality with a restrained premium finish. It is designed to feel composed on the page and dependable in daily use.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Ergonomically designed for comfort and ease</li>
                  <li>Crafted with durable materials and quality checks</li>
                  <li>Styled to pair well with adjacent collections</li>
                  <li>Protected by clear delivery and return policies</li>
                </ul>
              </div>
            </TheaterPanel>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <TheaterPanel className="rounded-[28px] p-6 md:p-8">
              <h3 className="text-3xl font-[340] tracking-[-0.04em] text-white">Technical specifications</h3>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  {[
                    ["Brand", "LuxeStore"],
                    ["Category", product.category],
                    ["Model number", `LS-${product.id.toUpperCase()}-2026`],
                    ["Warranty", "1 Year"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="flex items-center justify-between gap-3 text-sm text-white">
                        <span>{label}</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                      <Separator className="mt-3 bg-white/8" />
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {[
                    ["Material", "Premium quality"],
                    ["Color", "As shown"],
                    ["Weight", "Lightweight"],
                    ["Packaging", "Retail presentation box"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="flex items-center justify-between gap-3 text-sm text-white">
                        <span>{label}</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                      <Separator className="mt-3 bg-white/8" />
                    </div>
                  ))}
                </div>
              </div>
            </TheaterPanel>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="grid gap-6 lg:grid-cols-[0.38fr_0.62fr]">
              <TheaterPanel className="rounded-[28px] p-6 md:p-8">
                <p className="eyebrow">Review summary</p>
                <p className="number-display mt-4 text-6xl text-white">4.9</p>
                <div className="mt-4 flex items-center gap-1 text-[#C1FBD4]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">Based on 128 verified reviews</p>
              </TheaterPanel>

              <div className="space-y-4">
                {reviewData.map((review) => (
                  <TheaterPanel key={review.name} className="rounded-[24px] p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-base text-white">{review.name}</p>
                        <div className="mt-2 flex items-center gap-1 text-[#C1FBD4]">
                          {[...Array(review.rating)].map((_, index) => (
                            <Star key={index} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-white/82">{review.review}</p>
                  </TheaterPanel>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-20">
          <SectionHeading
            eyebrow="Related products"
            title="Continue exploring this collection."
            className="mb-10 max-w-2xl"
          />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
