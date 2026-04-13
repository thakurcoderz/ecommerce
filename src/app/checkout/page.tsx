"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { SectionHeading } from "@/components/ui/section-heading";
import { SummaryRow } from "@/components/ui/summary-row";
import { EmptyStatePanel } from "@/components/ui/empty-state-panel";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="page-shell py-20">
        <EmptyStatePanel
          icon={<CheckCircle2 className="h-10 w-10 text-[#36F4A4]" />}
          title="Order confirmed"
          description="Thanks for your purchase. A confirmation email with order details and dispatch timing is on the way."
          actions={
            <Link href="/products">
              <Button size="lg">Continue shopping</Button>
            </Link>
          }
          className="max-w-2xl"
        />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="page-shell py-20">
        <EmptyStatePanel
          title="Your cart is empty"
          description="Add a few products before heading into checkout."
          actions={
            <Link href="/products">
              <Button>Go to products</Button>
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <div className="page-shell py-12 md:py-16 lg:py-20">
      <SectionHeading
        eyebrow="Checkout"
        title="A focused path from cart to confirmation."
        description="Enter shipping and payment details in a clean, dark interface built to keep the next step obvious."
        className="mb-10 max-w-2xl"
      />

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] xl:grid-cols-[1.25fr_0.75fr]">
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Card className="rounded-[28px]">
              <CardHeader>
                <CardTitle className="text-3xl text-white">Shipping information</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="First name" id="firstName" placeholder="John" />
                  <Field label="Last name" id="lastName" placeholder="Doe" />
                </div>
                <Field label="Email" id="email" type="email" placeholder="john.doe@example.com" />
                <Field label="Address" id="address" placeholder="123 Main St" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="City" id="city" placeholder="New York" />
                  <Field label="ZIP code" id="zip" placeholder="10001" />
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[28px]">
              <CardHeader>
                <CardTitle className="text-3xl text-white">Payment details</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-5">
                <Field label="Name on card" id="cardName" placeholder="John Doe" />
                <Field label="Card number" id="cardNumber" placeholder="0000 0000 0000 0000" />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Expiry date" id="expiry" placeholder="MM/YY" />
                  <Field label="CVC" id="cvc" placeholder="123" />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" size="lg" disabled={isProcessing}>
                  {isProcessing ? "Processing..." : `Pay $${(total * 1.08).toFixed(2)}`}
                </Button>
              </CardFooter>
            </Card>
          </form>
        </div>

        <div>
          <Card className="sticky top-24 rounded-[28px]">
            <CardHeader>
              <CardTitle className="text-3xl text-white">Order summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between gap-3 text-sm">
                    <div>
                      <p className="text-white">{item.name}</p>
                      <p className="mt-1 text-muted-foreground">{item.quantity} × ${item.price.toFixed(2)}</p>
                    </div>
                    <span className="text-white">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <Separator className="bg-white/8" />
              <SummaryRow label="Subtotal" value={`$${total.toFixed(2)}`} />
              <SummaryRow label="Shipping" value="Free" highlight />
              <SummaryRow label="Tax (8%)" value={`$${(total * 0.08).toFixed(2)}`} />
              <Separator className="bg-white/8" />
              <div className="flex items-center justify-between pt-2">
                <span className="text-base text-white">Total</span>
                <span className="number-display text-4xl text-white">${(total * 1.08).toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Field({ label, id, type = "text", placeholder }: { label: string; id: string; type?: string; placeholder: string }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} required />
    </div>
  );
}
