"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AuthSplitLayout } from "@/components/auth/auth-split-layout";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <AuthSplitLayout
      visualSide="left"
      formWidthClassName="max-w-md"
      formHeader={
        <>
          <p className="eyebrow">Welcome back</p>
          <h2 className="text-4xl font-[340] tracking-[-0.04em] text-white">Sign in</h2>
          <p className="text-sm leading-7 text-muted-foreground">
            Enter your email and password to continue shopping without interruption.
          </p>
        </>
      }
      formBody={
        <Card className="rounded-[28px] border-white/8 p-0">
          <CardHeader className="space-y-2 p-6 pb-0">
            <CardTitle className="text-2xl text-white">Access your account</CardTitle>
            <CardDescription>
              Everything stays staged in the same dark, focused environment.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-5 p-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/forgot-password" className="text-sm text-muted-foreground underline-offset-4 hover:text-white hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 p-6 pt-0">
              <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign in"}
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
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-white underline-offset-4 hover:underline">
                  Create one
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      }
      formFooter={
        <p className="text-center text-xs leading-6 text-muted-foreground lg:text-left">
          By signing in, you agree to our{" "}
          <Link href="/terms" className="text-white/80 underline-offset-4 hover:text-white hover:underline">Terms of Service</Link>
          {" "}and{" "}
          <Link href="/privacy" className="text-white/80 underline-offset-4 hover:text-white hover:underline">Privacy Policy</Link>.
        </p>
      }
      visualBadge="Dark-first member access"
      visualTitle="Sign back in to your curated storefront."
      visualDescription="Save products, manage your cart, and move through checkout with the same dark-first polish across every surface."
      visualImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=80"
      visualImageAlt="Shopping experience"
      visualBottom={
        <div className="grid max-w-md grid-cols-3 gap-4 border-t border-white/12 pt-6">
          <div>
            <p className="number-display text-4xl text-white">10k+</p>
            <p className="mt-2 text-sm text-white/70">Active shoppers</p>
          </div>
          <div>
            <p className="number-display text-4xl text-white">4.9</p>
            <p className="mt-2 text-sm text-white/70">Average rating</p>
          </div>
          <div>
            <p className="number-display text-4xl text-white">48h</p>
            <p className="mt-2 text-sm text-white/70">Typical dispatch</p>
          </div>
        </div>
      }
    />
  );
}
