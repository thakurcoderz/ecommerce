import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TermsOfServicePage() {
  return (
    <div className="container py-16 px-4 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: January 15, 2024</p>
      </div>

      <Card className="border-muted">
        <CardContent className="p-6 md:p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using LuxeStore ("we," "our," or "us"), you agree to be bound by these Terms of Service.
              If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Permission is granted to temporarily access the materials on LuxeStore's website for personal,
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
            <p className="text-muted-foreground font-medium mb-2">Under this license you may not:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or proprietary notations</li>
              <li>Transfer the materials to another person</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Account Terms</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>You are responsible for maintaining the security of your account and password.</p>
              <p>You must provide accurate and complete information when creating an account.</p>
              <p>You may not use our service for any illegal or unauthorized purpose.</p>
              <p>You are responsible for all activity under your account.</p>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Products and Services</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>All product descriptions, pricing, and availability are subject to change without notice.</p>
              <p>We reserve the right to limit quantities and refuse service to anyone for any reason.</p>
              <p>Product images are for illustrative purposes and may not reflect the exact appearance of the item.</p>
              <p>We do not warrant that product descriptions or other content is accurate, complete, or error-free.</p>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Pricing and Payment</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>All prices are in USD and are subject to change without notice.</p>
              <p>We reserve the right to refuse or cancel any order for any reason.</p>
              <p>Payment must be received before shipment of products.</p>
              <p>We accept major credit cards, debit cards, and other payment methods as displayed at checkout.</p>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Shipping and Delivery</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Shipping times are estimates and not guaranteed.</p>
              <p>Risk of loss and title pass to you upon delivery to the carrier.</p>
              <p>We are not responsible for delays caused by the shipping carrier or customs.</p>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Returns and Refunds</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>We offer a 30-day return policy for most items in original condition.</p>
              <p>Refunds will be processed to the original payment method within 5-10 business days.</p>
              <p>Shipping costs are non-refundable unless the return is due to our error.</p>
              <p>Custom or personalized items may not be eligible for return.</p>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this website, including text, graphics, logos, images, and software, is the property
              of LuxeStore or its content suppliers and is protected by international copyright laws.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              LuxeStore shall not be liable for any indirect, incidental, special, consequential, or punitive damages
              resulting from your access to or use of our services.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon
              posting to this page. Your continued use of the service constitutes acceptance of modified terms.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
            <div className="text-muted-foreground leading-relaxed">
              <p className="mb-2">For questions about these Terms of Service, please contact us:</p>
              <ul className="space-y-1 ml-4">
                <li>Email: legal@luxestore.com</li>
                <li>Phone: 1-800-LUXE-SHOP</li>
                <li>Address: 123 Commerce Street, Shopping District, CA 90210</li>
              </ul>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
