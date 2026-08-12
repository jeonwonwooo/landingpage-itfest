import { cn } from "@/lib/utils";

type BadgeProps = {
  className?: string;
  variant?: "teal" | "emerald" | "blue" | "slate";
  children: React.ReactNode;
};

export default function Badge({ className, variant = "teal", children }: BadgeProps) {
  const variantStyles = {
    teal: "border-[#c6cbe8]/80 bg-[#eef0f8]/80 text-[var(--primary-dark)]",
    emerald: "border-[#eed8ac]/80 bg-[#fbf3e4]/80 text-[#8c6f3f]",
    blue: "border-[#c6cbe8]/80 bg-[#eef0f8]/80 text-[#101026]",
    slate: "border-[#d8c8c0] bg-[#f8e8d8] text-[#38365a]",
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
