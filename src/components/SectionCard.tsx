import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  headerRight?: React.ReactNode;
};

export default function SectionCard({ title, subtitle, className, children, headerRight }: Props) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-6 sm:p-7 shadow-sm",
        className
      )}
    >
      {(title || subtitle || headerRight) && (
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            {subtitle && <div className="text-xs sm:text-sm opacity-70 mb-1">{subtitle}</div>}
            {title && <h3 className="text-lg sm:text-xl font-semibold tracking-tight">{title}</h3>}
          </div>
          {headerRight}
        </div>
      )}
      {children}
    </div>
  );
}


