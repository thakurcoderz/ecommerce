"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Check, Star, Truck, Shield, RefreshCw, Package } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { WishlistButton } from "@/components/wishlist-button";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

export default function ProductDetailPage() {
  const params = useParams();
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="container py-20 text-center max-w-2xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Button onClick={() => window.history.back()}>Go Back</Button>
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

  // Get related products (same category, different id)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="container py-10 md:py-16 lg:py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-muted rounded-lg overflow-hidden border shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-muted rounded-md overflow-hidden border cursor-pointer opacity-70 hover:opacity-100 transition-all hover:border-primary"
              >
                <img
                  src={product.image}
                  alt={`${product.name} view ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-3">
              {product.category}
            </Badge>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mb-5">
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium">4.9</span>
              <span className="text-sm text-muted-foreground">(128 reviews)</span>
            </div>
            <p className="text-3xl md:text-4xl font-bold text-primary">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <Separator className="mb-8" />

          <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4">Key Features</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Premium quality materials and construction
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  1-year manufacturer warranty included
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Free shipping on orders over $50
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  30-day money-back guarantee
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="flex-1 text-base h-12 px-10"
                onClick={handleAddToCart}
                disabled={isAdded}
              >
                {isAdded ? (
                  <>
                    <Check className="mr-2 h-5 w-5" /> Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                  </>
                )}
              </Button>
              <WishlistButton product={product} variant="default" className="h-12 px-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <Card className="border-muted">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Truck className="h-8 w-8 mb-3 text-primary" />
            <h4 className="font-semibold text-sm mb-1">Free Shipping</h4>
            <p className="text-xs text-muted-foreground">On orders over $50</p>
          </CardContent>
        </Card>
        <Card className="border-muted">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Shield className="h-8 w-8 mb-3 text-primary" />
            <h4 className="font-semibold text-sm mb-1">Secure Payment</h4>
            <p className="text-xs text-muted-foreground">100% protected</p>
          </CardContent>
        </Card>
        <Card className="border-muted">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <RefreshCw className="h-8 w-8 mb-3 text-primary" />
            <h4 className="font-semibold text-sm mb-1">Easy Returns</h4>
            <p className="text-xs text-muted-foreground">30-day policy</p>
          </CardContent>
        </Card>
        <Card className="border-muted">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Package className="h-8 w-8 mb-3 text-primary" />
            <h4 className="font-semibold text-sm mb-1">1-Year Warranty</h4>
            <p className="text-xs text-muted-foreground">Full coverage</p>
          </CardContent>
        </Card>
      </div>

      {/* Product Details Tabs */}
      <div className="mb-16">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 mb-8">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Product Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This premium product combines cutting-edge technology with timeless design.
              Crafted with attention to detail, it delivers exceptional performance and durability.
              Whether you're a professional or an enthusiast, this product will exceed your expectations.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Ergonomically designed for maximum comfort</li>
              <li>Built with sustainable and eco-friendly materials</li>
              <li>Tested for quality and performance standards</li>
              <li>Compatible with various accessories and add-ons</li>
            </ul>
          </TabsContent>

          <TabsContent value="specifications" className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Brand</span>
                  <span className="text-muted-foreground">LuxeStore</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Category</span>
                  <span className="text-muted-foreground">{product.category}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Model Number</span>
                  <span className="text-muted-foreground">LS-{product.id.toUpperCase()}-2024</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Warranty</span>
                  <span className="text-muted-foreground">1 Year</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Material</span>
                  <span className="text-muted-foreground">Premium Quality</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Color</span>
                  <span className="text-muted-foreground">As Shown</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Weight</span>
                  <span className="text-muted-foreground">Lightweight</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Package</span>
                  <span className="text-muted-foreground">Retail Box</span>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Customer Reviews</h3>
              <Button variant="outline" size="sm">Write a Review</Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-1">
                <div className="text-center p-6 bg-muted/30 rounded-lg">
                  <div className="text-5xl font-bold mb-2">4.9</div>
                  <div className="flex justify-center text-yellow-500 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Based on 128 reviews</p>
                </div>
              </div>

              <div className="md:col-span-2 space-y-3">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-3">
                    <span className="text-sm font-medium w-8">{rating} ★</span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${rating === 5 ? 80 : rating === 4 ? 15 : 5}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-12 text-right">
                      {rating === 5 ? "80%" : rating === 4 ? "15%" : "5%"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Reviews */}
            <div className="space-y-6">
              {[
                {
                  name: "Sarah Johnson",
                  rating: 5,
                  date: "2 weeks ago",
                  review: "Absolutely love this product! The quality exceeded my expectations and it arrived quickly. Highly recommend!"
                },
                {
                  name: "Michael Chen",
                  rating: 5,
                  date: "1 month ago",
                  review: "Great value for money. The build quality is excellent and it works perfectly. Very satisfied with my purchase."
                },
                {
                  name: "Emma Davis",
                  rating: 4,
                  date: "2 months ago",
                  review: "Good product overall. Does what it's supposed to do. Only minor issue is the packaging could be better."
                }
              ].map((review, idx) => (
                <Card key={idx} className="border-muted">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <div className="flex text-yellow-500 mt-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <p className="text-muted-foreground">{review.review}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`} className="group">
                <Card className="h-full overflow-hidden transition-all hover:shadow-lg border-muted">
                  <div className="aspect-square relative overflow-hidden bg-muted">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-1">{relatedProduct.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <p className="font-bold text-xl">${relatedProduct.price.toFixed(2)}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
