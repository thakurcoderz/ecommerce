"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { AuthSplitLayout } from "@/components/auth/auth-split-layout";

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <AuthSplitLayout
      visualSide="right"
      formHeaderClassName=""
      formHeader={
        <>
          <p className="eyebrow">Create account</p>
          <h1 className="section-display">Start a calmer shopping routine.</h1>
          <p className="text-sm leading-7 text-muted-foreground">
            Save your favorite finds, track orders, and move through checkout with a single, consistent account.
          </p>
        </>
      }
      formBody={
        <Card className="rounded-[28px] border-white/8 p-0">
          <CardHeader className="space-y-2 p-6 pb-0">
            <CardTitle className="text-2xl text-white">Create your profile</CardTitle>
            <CardDescription>
              Join LuxeStore and keep every saved product, cart, and order in sync.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-5 p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" type="text" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" type="text" placeholder="Doe" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Minimum 8 characters" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm password</Label>
                <Input id="confirmPassword" type="password" required />
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <Checkbox id="terms" required className="mt-1" />
                <label htmlFor="terms" className="text-sm leading-7 text-muted-foreground">
                  I agree to the{" "}
                  <Link href="/terms" className="text-white underline-offset-4 hover:underline">Terms of Service</Link>
                  {" "}and{" "}
                  <Link href="/privacy" className="text-white underline-offset-4 hover:underline">Privacy Policy</Link>.
                </label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 p-6 pt-0">
              <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create account"}
                {!isLoading && <ArrowRight className="h-4 w-4" />}
              </Button>

              <div className="relative w-full">
                <Separator className="bg-white/8" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#02090A] px-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Or continue with
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" type="button" className="w-full justify-center">Google</Button>
                <Button variant="outline" type="button" className="w-full justify-center">GitHub</Button>
              </div>

              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-white underline-offset-4 hover:underline">Sign in</Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      }
      visualBadge="Shopper onboarding"
      visualTitle="A premium membership layer for modern essentials."
      visualDescription="Create a profile to keep wishlists, orders, and faster checkout steps ready whenever you return."
      visualImage="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1400&q=80"
      visualImageAlt="Shopping experience"
      visualBottom={
        <div className="grid max-w-md grid-cols-3 gap-4 border-t border-white/12 pt-6">
          <div>
            <p className="number-display text-4xl text-white">500+</p>
            <p className="mt-2 text-sm text-white/70">Curated products</p>
          </div>
          <div>
            <p className="number-display text-4xl text-white">99%</p>
            <p className="mt-2 text-sm text-white/70">Satisfaction</p>
          </div>
          <div>
            <p className="number-display text-4xl text-white">24/7</p>
            <p className="mt-2 text-sm text-white/70">Support</p>
          </div>
        </div>
      }
    />
  );
}
