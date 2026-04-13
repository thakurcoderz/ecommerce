import { cn } from "@/lib/utils";

type SummaryRowProps = {
  label: string;
  value: string;
  highlight?: boolean;
  className?: string;
};

export function SummaryRow({ label, value, highlight = false, className }: SummaryRowProps) {
  return (
    <div className={cn("flex items-center justify-between text-sm", className)}>
      <span className="text-muted-foreground">{label}</span>
      <span className={highlight ? "text-[#36F4A4]" : "text-white"}>{value}</span>
    </div>
  );
}
