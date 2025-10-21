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
        "p-4 sm:p-5",
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


