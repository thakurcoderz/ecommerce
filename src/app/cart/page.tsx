"use client";

import Link from "next/link";
import Image from "next/image";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SectionHeading } from "@/components/ui/section-heading";
import { SummaryRow } from "@/components/ui/summary-row";
import { EmptyStatePanel } from "@/components/ui/empty-state-panel";

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="page-shell py-20">
        <EmptyStatePanel
          icon={<ShoppingBag className="h-8 w-8 text-[#36F4A4]" />}
          title="Your cart is empty"
          description="Start with the catalog and add a few favorites. Your selections will appear here in a quieter, faster checkout flow."
          actions={
            <Link href="/products">
              <Button size="lg">Start shopping</Button>
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <div className="page-shell py-12 md:py-16 lg:py-20">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Shopping cart"
          title="Everything selected for checkout."
          description="Review quantities, remove anything you no longer need, and head to checkout when ready."
          className="max-w-2xl"
        />
        <Button variant="outline" onClick={clearCart}>Clear cart</Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] xl:grid-cols-[1.35fr_0.65fr]">
        <div className="space-y-4">
          {items.map((item) => (
            <Card key={item.id} className="overflow-hidden rounded-[28px] p-0">
              <div className="grid gap-0 md:grid-cols-[220px_1fr]">
                <div className="relative aspect-[5/4] border-b border-white/8 md:aspect-square md:border-b-0 md:border-r">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 220px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-[340] tracking-[-0.03em] text-white">{item.name}</h2>
                      <p className="mt-2 text-sm text-muted-foreground">${item.price.toFixed(2)} each</p>
                    </div>
                    <Button variant="ghost" size="icon-sm" className="border border-white/8" onClick={() => removeItem(item.id)}>
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Remove item</span>
                    </Button>
                  </div>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Quantity</p>
                      <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1.5">
                        <Button variant="ghost" size="icon-sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-10 text-center text-sm text-white">{item.quantity}</span>
                        <Button variant="ghost" size="icon-sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Line total</p>
                      <p className="number-display mt-2 text-4xl text-white">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div>
          <Card className="sticky top-24 rounded-[28px]">
            <CardHeader>
              <CardTitle className="text-3xl text-white">Order summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <SummaryRow label="Subtotal" value={`$${total.toFixed(2)}`} />
              <SummaryRow label="Shipping" value="Free" highlight />
              <SummaryRow label="Tax (8%)" value={`$${(total * 0.08).toFixed(2)}`} />
              <Separator className="bg-white/8" />
              <div className="flex items-center justify-between pt-2">
                <span className="text-base text-white">Total</span>
                <span className="number-display text-4xl text-white">${(total * 1.08).toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter className="pt-2">
              <Link href="/checkout" className="w-full">
                <Button className="w-full" size="lg">
                  Proceed to checkout
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
