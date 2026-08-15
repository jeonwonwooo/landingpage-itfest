import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "white" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2";

const variants = {
  primary:
    "bg-[var(--primary)] text-[#f8e8d8] hover:bg-[var(--primary-dark)] shadow-[0_8px_24px_-12px_rgba(32,32,72,0.18)]",
  secondary:
    "bg-[#202048]/5 text-[#202048] hover:bg-[#202048]/10 border border-[#d8c8c0] shadow-sm",
  ghost:
    "border border-[#d8c8c0] bg-transparent text-[#6f6870] hover:border-[#c8a060] hover:bg-[#202048]/5",
  outline:
    "border border-[#d8c8c0] bg-transparent text-[#6f6870] hover:border-[#c8a060] hover:bg-[#202048]/8",
  white: "bg-[#202048]/5 text-[var(--primary)] hover:bg-[#202048]/8 shadow-sm",
};

const sizes = {
  sm: "px-4 py-1.5 text-xs",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </Link>
  );
}
