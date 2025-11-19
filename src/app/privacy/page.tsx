import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-16 px-4 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: January 15, 2024</p>
      </div>

      <Card className="border-muted">
        <CardContent className="p-6 md:p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              LuxeStore ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>

            <h3 className="text-lg font-semibold mb-3 mt-6">Personal Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Name, email address, and contact information</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information (processed securely by our payment providers)</li>
              <li>Account credentials (username and password)</li>
              <li>Order history and preferences</li>
              <li>Communications with customer service</li>
            </ul>

            <h3 className="text-lg font-semibold mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you access our website, we automatically collect:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Device and browser information</li>
              <li>IP address and location data</li>
              <li>Browsing behavior and pages visited</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We use the collected information for:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Processing and fulfilling your orders</li>
              <li>Communicating with you about your orders and account</li>
              <li>Providing customer support</li>
              <li>Sending marketing communications (with your consent)</li>
              <li>Improving our website and services</li>
              <li>Detecting and preventing fraud</li>
              <li>Complying with legal obligations</li>
              <li>Analyzing usage patterns and preferences</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Service providers who assist in our operations (shipping, payment processing, etc.)</li>
              <li>Analytics and marketing partners</li>
              <li>Law enforcement when required by law</li>
              <li>Business successors in the event of a merger or acquisition</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Remember your preferences and settings</li>
              <li>Keep you signed in</li>
              <li>Analyze site traffic and usage</li>
              <li>Personalize content and advertisements</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You can control cookies through your browser settings, but this may affect website functionality.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information.
              However, no method of transmission over the Internet is 100% secure. We use industry-standard encryption
              for sensitive data and regularly review our security practices.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Access and update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Disable cookies in your browser</li>
              <li>Request a copy of your data</li>
              <li>Object to certain processing activities</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy,
              unless a longer retention period is required by law. Account information is deleted upon request, subject to
              legal and operational requirements.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not directed to children under 13. We do not knowingly collect personal information from
              children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate
              safeguards are in place to protect your data in accordance with this Privacy Policy.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              policy on this page and updating the "Last updated" date. Your continued use of our services constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <div className="text-muted-foreground leading-relaxed">
              <p className="mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="space-y-1 ml-4">
                <li className="font-medium">Email: privacy@luxestore.com</li>
                <li className="font-medium">Phone: 1-800-LUXE-SHOP</li>
                <li className="font-medium">Address: 123 Commerce Street, Shopping District, CA 90210</li>
              </ul>
              <p className="mt-4">
                For data protection inquiries in the EU, you may contact our Data Protection Officer at dpo@luxestore.com
              </p>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
