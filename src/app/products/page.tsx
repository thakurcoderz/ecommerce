"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, SlidersHorizontal, Tag } from "lucide-react";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { TheaterPanel } from "@/components/ui/theater-panel";
import { FilterGroup } from "@/components/ui/filter-group";

const sortOptions = [
  { key: "featured", label: "Featured" },
  { key: "price-asc", label: "Price: Low to High" },
  { key: "price-desc", label: "Price: High to Low" },
  { key: "name-asc", label: "Name: A-Z" },
];

function ProductGrid() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const sort = searchParams.get("sort") ?? "featured";

  const categories = [
    "All",
    ...Array.from(new Set(products.map((product) => product.category))).sort((a, b) =>
      a.localeCompare(b)
    ),
  ];

  const filteredProducts = (category
    ? products.filter((product) => product.category === category)
    : products).slice();

  if (sort === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "name-asc") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  const makeHref = (nextCategory: string, nextSort: string) => {
    const params = new URLSearchParams();

    if (nextCategory !== "All") {
      params.set("category", nextCategory);
    }

    if (nextSort !== "featured") {
      params.set("sort", nextSort);
    }

    const query = params.toString();
    return query ? `/products?${query}` : "/products";
  };

  const activeCategoryLabel = category ?? "All";
  const activeSortLabel =
    sortOptions.find((option) => option.key === sort)?.label ?? sortOptions[0].label;
  const isFiltered = !!category || sort !== "featured";

  return (
    <div className="page-shell py-12 md:py-16 lg:py-20">
      <div className="mb-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <SectionHeading
          eyebrow="Product catalog"
          title={category ? `${category} collection` : "Curated premium products"}
          description="Move through a focused catalog designed around contrast, texture, and calm product discovery."
        />

        <TheaterPanel className="p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Catalog overview</p>
          <div className="mt-4 flex items-end justify-between gap-4">
            <div>
              <p className="number-display text-5xl text-white">{filteredProducts.length}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {filteredProducts.length === 1 ? "Product available" : "Products available"}
              </p>
            </div>
            <Link href="/wishlist">
              <Button variant="outline">
                Saved items
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </TheaterPanel>
      </div>

      <TheaterPanel className="mb-10 p-5 md:p-6">
        <div className="mb-6 flex flex-col gap-4 border-b border-white/8 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Filters and sorting</p>
            <p className="mt-2 text-sm text-white/85">
              Category: <span className="text-white">{activeCategoryLabel}</span>
              {"  "}•{"  "}
              Sort: <span className="text-white">{activeSortLabel}</span>
            </p>
          </div>

          {isFiltered ? (
            <Link href="/products">
              <Button variant="outline" size="sm">Reset filters</Button>
            </Link>
          ) : (
            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Showing default catalog</span>
          )}
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <FilterGroup
            icon={<Tag className="h-3.5 w-3.5" />}
            label="Browse by category"
            activeVariant="default"
            options={categories.map((entry) => ({
              key: entry,
              label: entry,
              href: makeHref(entry, sort),
              isActive: (entry === "All" && !category) || category === entry,
            }))}
          />

          <FilterGroup
            icon={<SlidersHorizontal className="h-3.5 w-3.5" />}
            label="Sort results"
            activeVariant="secondary"
            options={sortOptions.map((option) => ({
              key: option.key,
              label: option.label,
              href: makeHref(category ?? "All", option.key),
              isActive: sort === option.key,
            }))}
          />
        </div>
      </TheaterPanel>

      {filteredProducts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <TheaterPanel className="p-10 text-center">
          <h2 className="text-3xl font-[340] tracking-[-0.04em] text-white">No products found</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
            This collection is currently empty. Reset the filter to browse the full catalog.
          </p>
          <div className="mt-8">
            <Link href="/products">
              <Button>View all products</Button>
            </Link>
          </div>
        </TheaterPanel>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="page-shell py-16 text-muted-foreground">Loading products...</div>}>
      <ProductGrid />
    </Suspense>
  );
}
