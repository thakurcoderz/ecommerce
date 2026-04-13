import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EmptyStatePanel } from "@/components/ui/empty-state-panel";

export default function ProductsNotFoundPage() {
  return (
    <div className="page-shell py-20 md:py-28">
      <EmptyStatePanel
        icon={<Search className="h-8 w-8 text-[#36F4A4]" />}
        title="Product not found"
        description="The product page you requested is unavailable. Browse the full catalog or return home to continue exploring."
        actions={
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/products">
              <Button size="lg">Browse products</Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="lg">
                <ArrowLeft className="h-4 w-4" />
                Back home
              </Button>
            </Link>
          </div>
        }
      />
    </div>
  );
}
