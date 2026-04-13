"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AuthSplitLayout } from "@/components/auth/auth-split-layout";

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setEmailSent(true);
    }, 2000);
  };

  return (
    <AuthSplitLayout
      visualSide="right"
      formHeaderClassName=""
      formHeader={
        <>
          <p className="eyebrow">Account recovery</p>
          <h1 className="section-display">Reset access in minutes.</h1>
          <p className="text-sm leading-7 text-muted-foreground">
            Enter your account email and we will send a secure reset link so you can get back to shopping.
          </p>
        </>
      }
      formBody={
        !emailSent ? (
          <Card className="rounded-[28px] border-white/8 p-0">
            <CardHeader className="space-y-2 p-6 pb-0">
              <CardTitle className="text-2xl text-white">Reset password</CardTitle>
              <CardDescription>
                We&apos;ll email one-time instructions to safely reset your password.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-5 p-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3 p-6 pt-0">
                <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send reset instructions"}
                </Button>
                <Link href="/login" className="w-full">
                  <Button variant="outline" className="w-full" type="button">
                    <ArrowLeft className="h-4 w-4" />
                    Back to sign in
                  </Button>
                </Link>
              </CardFooter>
            </form>
          </Card>
        ) : (
          <Card className="rounded-[28px] border-white/8 p-0">
            <CardHeader className="space-y-4 p-6 pb-0 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#36F4A4]/25 bg-[#36F4A4]/12">
                <Mail className="h-7 w-7 text-[#36F4A4]" />
              </div>
              <CardTitle className="text-3xl text-white">Check your email</CardTitle>
              <CardDescription>
                We&apos;ve sent reset instructions to your email address.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-4">
              <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5 text-sm leading-7 text-muted-foreground">
                <p className="mb-2 text-white/82">Didn&apos;t receive the email?</p>
                <ul className="space-y-1">
                  <li>Check spam or promotions folders.</li>
                  <li>Confirm that the email is correct.</li>
                  <li>Wait a few minutes and try again.</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3 p-6 pt-0">
              <Button variant="outline" className="w-full" onClick={() => setEmailSent(false)}>
                Try another email
              </Button>
              <Link href="/login" className="w-full">
                <Button variant="ghost" className="w-full">
                  <ArrowLeft className="h-4 w-4" />
                  Back to sign in
                </Button>
              </Link>
            </CardFooter>
          </Card>
        )
      }
      visualBadge="Secure reset flow"
      visualTitle="Your account stays protected while you recover access."
      visualDescription="One-time links, controlled expiry windows, and clear next steps keep account recovery fast and safe."
      visualImage="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?w=1400&q=80"
      visualImageAlt="Account security"
      visualBottom={
        <div className="space-y-3 border-t border-white/12 pt-6">
          {[
            "One-time secure reset links",
            "24-hour expiry for safety",
            "No changes until you confirm",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm text-white/88">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#36F4A4]/25 bg-[#36F4A4]/12">
                <Mail className="h-4 w-4 text-[#36F4A4]" />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      }
    />
  );
}
