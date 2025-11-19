import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { products } from "@/lib/data";
import { ArrowRight, Truck, Shield, RefreshCw, Star, Check } from "lucide-react";

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1920&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
        </div>

        <div className="container relative z-10 flex flex-col items-center text-center px-4 max-w-7xl mx-auto">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm bg-white/20 text-white border-white/30 hover:bg-white/30">
            ✨ New Collection Now Available
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 drop-shadow-lg">
            Elevate Your Lifestyle
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-[700px] mb-10 leading-relaxed drop-shadow">
            Discover a curated collection of premium products designed to enhance your daily life. Quality, style, and innovation in every item.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <Link href="/products" className="w-full sm:w-auto">
              <Button size="lg" className="h-12 px-10 text-base w-full sm:w-auto bg-white text-black hover:bg-white/90">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/products?category=Electronics" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="h-12 px-10 text-base w-full sm:w-auto border-white/30 text-white bg-white/10 hover:bg-white/20">
                Explore Electronics
              </Button>
            </Link>
          </div>
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -z-10" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl -z-10" />
      </section>

      {/* Features/Benefits Section */}
      <section className="py-16 md:py-20 border-b">
        <div className="container px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">On orders over $50</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">100% protected checkout</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <RefreshCw className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">30-day return policy</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Star className="h-8 w-8 text-primary fill-current" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">Curated excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container px-4 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Handpicked favorites just for you</p>
            </div>
            <Link href="/products">
              <Button variant="ghost" className="group">
                View All
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group">
                <Card className="h-full overflow-hidden transition-all hover:shadow-lg border-muted">
                  <div className="aspect-square relative overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-5">
                    <CardTitle className="line-clamp-1 text-lg">{product.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{product.category}</p>
                  </CardHeader>
                  <CardContent className="p-5 pt-0">
                    <p className="font-bold text-xl">${product.price.toFixed(2)}</p>
                  </CardContent>
                  <CardFooter className="p-5 pt-0">
                    <Button className="w-full opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">10k+</div>
              <div className="text-sm md:text-base opacity-90">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-sm md:text-base opacity-90">Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">4.9</div>
              <div className="text-sm md:text-base opacity-90">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
              <div className="text-sm md:text-base opacity-90">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">What Our Customers Say</h2>
            <p className="text-muted-foreground">Real experiences from real people</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                role: "Interior Designer",
                content: "The quality of products is outstanding. I've ordered multiple items and each one exceeded my expectations. Highly recommend!",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Tech Enthusiast",
                content: "Fast shipping, excellent customer service, and the products are exactly as described. This is my go-to store now.",
                rating: 5
              },
              {
                name: "Emma Davis",
                role: "Small Business Owner",
                content: "I love the variety and the attention to detail. Every purchase feels special and well-thought-out. Five stars!",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="border-muted">
                <CardContent className="p-6">
                  <div className="flex text-yellow-500 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-12 text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Electronics", icon: "💻" },
              { name: "Accessories", icon: "👜" },
              { name: "Furniture", icon: "🛋️" }
            ].map((category) => (
              <Link
                key={category.name}
                href={`/products?category=${category.name}`}
                className="group relative overflow-hidden rounded-lg aspect-video bg-background border shadow-sm hover:shadow-md transition-all"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-transparent to-primary/5 group-hover:to-primary/10 transition-all">
                  <div className="text-5xl mb-3">{category.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Stay in the Loop</h2>
          <p className="text-lg opacity-90 mb-8">
            Subscribe to our newsletter for exclusive deals, new arrivals, and style tips
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 bg-background text-foreground border-0"
              required
            />
            <Button size="lg" variant="secondary" className="h-12 px-8">
              Subscribe
            </Button>
          </form>
          <p className="text-sm opacity-75 mt-4">No spam, unsubscribe anytime</p>
        </div>
      </section>
    </div>
  );
}
