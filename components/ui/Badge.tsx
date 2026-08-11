import { cn } from "@/lib/utils";

type BadgeProps = {
  className?: string;
  variant?: "teal" | "emerald" | "blue" | "slate";
  children: React.ReactNode;
};

export default function Badge({ className, variant = "teal", children }: BadgeProps) {
  const variantStyles = {
    teal: "border-teal-200/80 bg-teal-50/80 text-[var(--primary-dark)]",
    emerald: "border-emerald-200/80 bg-emerald-50/80 text-emerald-800",
    blue: "border-blue-200/80 bg-blue-50/80 text-blue-800",
    slate: "border-slate-200 bg-slate-100 text-slate-700",
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
