"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Mail } from "lucide-react";

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setEmailSent(true);
    }, 2000);
  };

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] grid lg:grid-cols-2">
      {/* Left Side - Forgot Password Form */}
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Forgot your password?
            </h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground">
              No worries! Enter your email and we'll send you reset instructions
            </p>
          </div>

          {!emailSent ? (
            <Card className="border-muted shadow-lg">
              <CardHeader className="space-y-1 pb-4">
                <CardTitle className="text-2xl">Reset Password</CardTitle>
                <CardDescription>
                  We'll email you instructions to reset your password
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        className="h-11 pl-10"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Enter the email associated with your account
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4 pt-6">
                  <Button className="w-full h-11 text-base" type="submit" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send reset instructions"}
                  </Button>

                  <Link href="/login" className="w-full">
                    <Button variant="outline" className="w-full h-10" type="button">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to sign in
                    </Button>
                  </Link>
                </CardFooter>
              </form>
            </Card>
          ) : (
            <Card className="border-muted shadow-lg">
              <CardHeader className="space-y-1 pb-4">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-green-100 p-3">
                    <Mail className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-center">Check your email</CardTitle>
                <CardDescription className="text-center">
                  We've sent password reset instructions to your email address
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">
                  <p className="mb-2">Didn't receive the email?</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Check your spam folder</li>
                    <li>Verify you entered the correct email</li>
                    <li>Wait a few minutes and try again</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-3 pt-6">
                <Button
                  variant="outline"
                  className="w-full h-10"
                  onClick={() => setEmailSent(false)}
                >
                  Try another email
                </Button>
                <Link href="/login" className="w-full">
                  <Button variant="ghost" className="w-full h-10">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to sign in
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>

      {/* Right Side - Visual/Image */}
      <div className="hidden lg:block relative bg-muted">
        <img
          src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?w=1200&q=80"
          alt="Security"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        <div className="absolute inset-0 flex flex-col justify-end p-12">
          <div className="max-w-md">
            <blockquote className="space-y-4">
              <p className="text-xl md:text-2xl font-medium text-white leading-relaxed">
                "Your account security is our top priority. We'll help you get back in safely."
              </p>
            </blockquote>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-white/90">
                <div className="rounded-full bg-white/20 p-2">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm">Secure password reset process</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="rounded-full bg-white/20 p-2">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm">Link expires in 24 hours</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="rounded-full bg-white/20 p-2">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm">One-time use only</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
