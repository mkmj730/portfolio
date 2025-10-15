type Props = { children: React.ReactNode; tone?: "brand" | "neutral" };

export default function Badge({ children, tone = "brand" }: Props) {
  const toneCls =
    tone === "brand"
      ? "bg-brand/10 text-brand ring-brand/20"
      : "bg-black/5 text-foreground/70 dark:bg-white/10 dark:text-white/80 ring-black/10 dark:ring-white/10";
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ring-1 ${toneCls}`}>
      {children}
    </span>
  );
}


