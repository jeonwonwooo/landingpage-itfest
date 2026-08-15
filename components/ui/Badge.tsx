import { cn } from "@/lib/utils";

type BadgeProps = {
  className?: string;
  variant?: "teal" | "emerald" | "blue" | "slate";
  children: React.ReactNode;
};

export default function Badge({ className, variant = "teal", children }: BadgeProps) {
  const variantStyles = {
    teal: "border-[#d8c8c0]/80 bg-[#202048]/5 text-[#202048]",
    emerald: "border-[#c8a060]/80 bg-[#c8a060]/12 text-[#202048]",
    blue: "border-[#d8c8c0]/80 bg-[#202048]/5 text-[#202048]",
    slate: "border-[#d8c8c0] bg-[#f8e8d8] text-[#6f6870]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
