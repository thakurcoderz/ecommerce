import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Truck, RefreshCw, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { TheaterPanel } from "@/components/ui/theater-panel";
import { StatTile } from "@/components/ui/stat-tile";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";

const highlights = [
  {
    title: "Fast dispatch",
    description: "Orders leave within 48 hours with premium packaging and tracking built in.",
    icon: Truck,
  },
  {
    title: "Secure checkout",
    description: "Protected payments, frictionless carts, and a calmer purchase flow from start to finish.",
    icon: ShieldCheck,
  },
  {
    title: "Simple returns",
    description: "Flexible 30-day returns with proactive support and crystal-clear order updates.",
    icon: RefreshCw,
  },
];

const categories = [
  {
    name: "Electronics",
    description: "Connected essentials with performance-first design.",
    href: "/products?category=Electronics",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
  },
  {
    name: "Accessories",
    description: "Refined daily pieces that elevate routine moments.",
    href: "/products?category=Accessories",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200&q=80",
  },
  {
    name: "Furniture",
    description: "Quiet, sculptural forms for a modern interior.",
    href: "/products?category=Furniture",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Interior Designer",
    content: "The interface feels premium, but the products back it up. Every order has arrived exactly as presented.",
  },
  {
    name: "Michael Chen",
    role: "Tech Consultant",
    content: "The product discovery flow is calm and focused. I can compare, save, and check out without noise.",
  },
  {
    name: "Emma Davis",
    role: "Studio Founder",
    content: "LuxeStore makes commerce feel considered. It has the confidence of a boutique with the speed of a modern storefront.",
  },
];

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const heroProduct = featuredProducts[0];

  return (
    <div className="pb-24">
      <section className="relative overflow-hidden pt-14 md:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,38,32,0.8),transparent_35%),radial-gradient(circle_at_75%_18%,rgba(54,244,164,0.14),transparent_18%)]" />
        <div className="page-shell relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="space-y-8 py-10 md:py-16">
              <Badge className="rounded-md px-4 py-2 text-xs tracking-[0.26em]">
                Shopify-inspired dark luxury storefront
              </Badge>

              <div className="space-y-5">
                <p className="eyebrow">Dark-first commerce theater</p>
                <h1 className="hero-display max-w-4xl text-white">
                  Premium products, presented with cinematic calm.
                </h1>
                <p className="lead-copy max-w-2xl">
                  Discover curated essentials across electronics, accessories, and furniture in a storefront tuned for contrast, clarity, and conversion.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/products">
                  <Button size="lg">
                    Shop the collection
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button variant="outline" size="lg">Start for free</Button>
                </Link>
              </div>

              <div className="grid gap-4 border-t border-white/8 pt-8 sm:grid-cols-3">
                <StatTile
                  value="10k+"
                  label="Active shoppers"
                  description="Shoppers return for focused discovery and dependable delivery."
                />
                <StatTile
                  value="4.9"
                  label="Average rating"
                  description="Average rating across premium essentials and curated collections."
                />
                <StatTile
                  value="48h"
                  label="Typical dispatch"
                  description="Typical dispatch window for stocked orders and hero products."
                />
              </div>
            </div>

            <div className="theater-card spotlight-panel overflow-hidden rounded-[32px] p-4 md:p-5">
              <div className="rounded-[28px] border border-white/8 bg-[#061A1C]/85 p-5">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="eyebrow">Featured preview</p>
                    <h2 className="mt-3 text-3xl font-[340] tracking-[-0.04em] text-white">{heroProduct.name}</h2>
                  </div>
                  <Badge variant="secondary" className="rounded-md px-3 py-2 text-[10px] tracking-[0.22em]">
                    {heroProduct.category}
                  </Badge>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-white/8 bg-[#02090A]">
                  <Image
                    src={heroProduct.image}
                    alt={heroProduct.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover"
                  />
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                  <div>
                    <p className="text-sm leading-7 text-muted-foreground">{heroProduct.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-[#C1FBD4]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-current" />
                      ))}
                      <span className="text-sm text-white/80">Verified customer favorite</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">From</p>
                    <p className="number-display text-5xl text-white">${heroProduct.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
            <SectionHeading
              eyebrow="Why shoppers stay"
              title="A storefront tuned for trust, speed, and quiet confidence."
              className="mb-10 max-w-2xl"
            />

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;

              return (
                <TheaterPanel key={highlight.title} className="rounded-[24px] p-6 md:p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-[#36F4A4]" />
                  </div>
                  <h3 className="text-[1.55rem] font-[340] tracking-[-0.03em] text-white">{highlight.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{highlight.description}</p>
                </TheaterPanel>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="page-shell">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Featured collection"
              title="Curated products that feel at home in the dark."
              description="Every card, surface, and detail is refined to keep the product itself in focus."
              className="max-w-2xl"
            />
            <Link href="/products">
              <Button variant="outline">
                View all products
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="page-shell">
          <TheaterPanel className="overflow-hidden rounded-[32px] p-6 md:p-8">
            <SectionHeading
              eyebrow="Shop by category"
              title="Move between collections with keynote-style pacing."
              className="mb-8 max-w-2xl"
            />

            <div className="grid gap-5 lg:grid-cols-3">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group relative overflow-hidden rounded-[28px] border border-white/8 bg-[#061A1C]"
                >
                  <div className="relative h-80 w-full">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="eyebrow text-white/70">Collection</p>
                        <h3 className="mt-3 text-3xl font-[340] tracking-[-0.04em] text-white">{category.name}</h3>
                        <p className="mt-3 max-w-xs text-sm leading-7 text-white/72">{category.description}</p>
                      </div>
                      <div className="rounded-full border border-white/12 bg-white/[0.08] p-3 text-white transition-colors group-hover:bg-white group-hover:text-black">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </TheaterPanel>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Customer notes"
            title="People describe the experience as sharp, smooth, and quietly premium."
            className="mb-10 max-w-2xl"
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TheaterPanel key={testimonial.name} className="rounded-[24px] p-6">
                <div className="mb-5 flex items-center gap-1 text-[#C1FBD4]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-base leading-8 text-white/88">“{testimonial.content}”</p>
                <div className="mt-6 border-t border-white/8 pt-5">
                  <p className="text-base text-white">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </TheaterPanel>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="page-shell">
          <TheaterPanel className="overflow-hidden rounded-[32px] p-6 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <SectionHeading
                eyebrow="Newsletter"
                title="Stay close to new drops, private offers, and curated edits."
                description="One thoughtful email at a time. No noise, no clutter, and no bright banners."
                className="max-w-2xl"
              />

              <form className="grid w-full max-w-xl gap-3 sm:grid-cols-[1fr_auto] lg:w-[34rem]">
                <Input type="email" placeholder="Enter your email" />
                <Button size="lg">Subscribe</Button>
              </form>
            </div>
          </TheaterPanel>
        </div>
      </section>
    </div>
  );
}
