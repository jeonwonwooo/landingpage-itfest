const companies = [
  "Tokopedia",
  "Gojek",
  "Bukalapak",
  "Traveloka",
  "Shopee",
  "BRI",
  "Telkom",
  "BNI",
];

export default function LogoMarquee({ label }: { label?: string }) {
  const items = [...companies, ...companies];

  return (
    <div className="w-full">
      {label && (
        <p className="mb-6 text-center text-sm text-[#6f6870]">{label}</p>
      )}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--background)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--background)] to-transparent" />
        <div className="marquee-track flex w-max gap-12">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 text-sm font-semibold tracking-wide text-[#6f6870]"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
