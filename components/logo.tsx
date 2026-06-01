import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  size?: number;
  className?: string;
  showText?: boolean;
  textClassName?: string;
};

export function Logo({
  size = 36,
  className,
  showText = true,
  textClassName,
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Image
        src="/logo.png"
        alt="Unix29 logo"
        width={size}
        height={size}
        className="shrink-0 rounded-[22%]"
        priority
      />
      {showText && (
        <span
          className={cn(
            "font-semibold tracking-tight",
            textClassName ?? "text-lg",
          )}
        >
          Unix29
        </span>
      )}
    </span>
  );
}
