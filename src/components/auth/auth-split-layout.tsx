import type { ReactNode } from "react";
import Image from "next/image";

type AuthSplitLayoutProps = {
  visualSide: "left" | "right";
  formWidthClassName?: string;
  formHeaderClassName?: string;
  formHeader: ReactNode;
  formBody: ReactNode;
  formFooter?: ReactNode;
  visualBadge: string;
  visualTitle: string;
  visualDescription: string;
  visualImage: string;
  visualImageAlt: string;
  visualBottom: ReactNode;
};

export function AuthSplitLayout({
  visualSide,
  formWidthClassName = "max-w-lg",
  formHeaderClassName = "text-center lg:text-left",
  formHeader,
  formBody,
  formFooter,
  visualBadge,
  visualTitle,
  visualDescription,
  visualImage,
  visualImageAlt,
  visualBottom,
}: AuthSplitLayoutProps) {
  const visualPanel = (
    <div className="relative hidden min-h-[780px] overflow-hidden lg:block">
      <Image
        src={visualImage}
        alt={visualImageAlt}
        fill
        sizes="(max-width: 1024px) 0px, 50vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.86)),radial-gradient(circle_at_top,rgba(54,244,164,0.14),transparent_30%)]" />
      <div className="absolute inset-0 flex flex-col justify-between p-10">
        <div className="glass-badge inline-flex w-fit rounded-full px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/90">
          {visualBadge}
        </div>
        <div className="space-y-6">
          <h2 className="section-display max-w-lg text-white">{visualTitle}</h2>
          <p className="max-w-md text-base leading-8 text-white/76">{visualDescription}</p>
          {visualBottom}
        </div>
      </div>
    </div>
  );

  return (
    <div className="page-shell py-10 md:py-16">
      <div className="overflow-hidden rounded-[32px] border border-white/8 bg-[#02090A]/70 lg:grid lg:grid-cols-[1.02fr_0.98fr]">
        {visualSide === "left" ? visualPanel : null}

        <div className="flex items-center justify-center px-4 py-8 sm:px-8 md:px-10 lg:px-12 lg:py-12">
          <div className={`w-full ${formWidthClassName} space-y-8`}>
            <div className={`space-y-4 ${formHeaderClassName}`}>{formHeader}</div>
            {formBody}
            {formFooter}
          </div>
        </div>

        {visualSide === "right" ? visualPanel : null}
      </div>
    </div>
  );
}
