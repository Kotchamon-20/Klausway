import Image from "next/image";
import { assetPath } from "@/lib/asset-path";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** Logo height in pixels */
  height?: number;
  className?: string;
  showText?: boolean;
  textClassName?: string;
};

export function Logo({
  height = 40,
  className,
  showText = false,
  textClassName,
}: LogoProps) {
  const width = Math.round(height * 3.6);

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Image
        src={assetPath("/Logo.jpg")}
        alt="The Klaus Way logo"
        width={width}
        height={height}
        className="h-auto w-auto max-h-10 rounded-lg object-contain object-left sm:max-h-11"
        style={{ maxHeight: height, width: "auto" }}
        priority
      />
      {showText && (
        <span
          className={cn(
            "font-semibold tracking-tight",
            textClassName ?? "text-lg",
          )}
        >
          Klaus Way
        </span>
      )}
    </span>
  );
}
