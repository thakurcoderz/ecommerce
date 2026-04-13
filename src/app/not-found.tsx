import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EmptyStatePanel } from "@/components/ui/empty-state-panel";

export default function NotFound() {
  return (
    <div className="page-shell py-20 md:py-28">
      <EmptyStatePanel
        icon={<Search className="h-8 w-8 text-[#36F4A4]" />}
        title="404 — Page not found"
        description="The page you requested does not exist or may have moved. Continue browsing the catalog or return to the homepage."
        actions={
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/products">
              <Button size="lg">Browse catalog</Button>
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
