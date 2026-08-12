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
    "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] shadow-sm shadow-teal-900/10",
  secondary:
    "bg-white text-[#202048] hover:bg-[#f8e8d8] border border-[#d8c8c0] shadow-sm",
  ghost:
    "border border-[#d8c8c0] bg-white text-[#38365a] hover:border-[#c4bab0] hover:bg-[#fbf2e8]",
  outline:
    "border border-[#c4bab0] bg-transparent text-[#38365a] hover:border-[#a39da4] hover:bg-white",
  white: "bg-white text-[var(--primary-dark)] hover:bg-[#fbf2e8] shadow-sm",
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
