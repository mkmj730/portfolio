import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiDjango, 
  SiChartdotjs, 
  SiTradingview, 
  SiGithubactions, 
  SiCapacitor, 
  SiGoogle 
} from "react-icons/si";
import { MdPets } from "react-icons/md"; // Zustand 대체(펫 아이콘)
import { TbPlugConnected } from "react-icons/tb"; // WebSocket 대체
import { RiKey2Line } from "react-icons/ri"; // OAuth 대체
import { MdOutlineShoppingCart } from "react-icons/md"; // IAP 대체
import { IconType } from "react-icons";

type StackKey =
  | "react"
  | "next"
  | "ts"
  | "js"
  | "zustand"
  | "tailwind"
  | "django"
  | "chartjs"
  | "websocket"
  | "tradingview"
  | "cicd"
  | "capacitor"
  | "oauth"
  | "iap"
  | "seo";

const STACK_ICON: Record<StackKey, { label: string; Icon: IconType }> = {
  react: { label: "React", Icon: SiReact },
  next: { label: "Next.js", Icon: SiNextdotjs },
  ts: { label: "TypeScript", Icon: SiTypescript },
  js: { label: "JavaScript", Icon: SiJavascript },
  zustand: { label: "Zustand", Icon: MdPets },
  tailwind: { label: "Tailwind", Icon: SiTailwindcss },
  django: { label: "Django", Icon: SiDjango },
  chartjs: { label: "Chart.js", Icon: SiChartdotjs },
  websocket: { label: "WebSocket", Icon: TbPlugConnected },
  tradingview: { label: "TradingView", Icon: SiTradingview },
  cicd: { label: "CI/CD", Icon: SiGithubactions },
  capacitor: { label: "Capacitor", Icon: SiCapacitor },
  oauth: { label: "OAuth", Icon: RiKey2Line },
  iap: { label: "IAP", Icon: MdOutlineShoppingCart },
  seo: { label: "SEO", Icon: SiGoogle }
};

export default function StackIcons({ stacks }: { stacks?: string[] }) {
  if (!stacks || stacks.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {stacks.map((key, i) => {
        const k = key as StackKey;
        const meta = STACK_ICON[k];
        if (!meta) return null;
        const Icon = meta.Icon;
        return (
          <span
            key={`${key}-${i}`}
            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] sm:text-xs bg-black/5 dark:bg-white/10"
            aria-label={meta.label}
            title={meta.label}
          >
            <Icon className="size-3.5 sm:size-4" />
            <span>{meta.label}</span>
          </span>
        );
      })}
    </div>
  );
}


