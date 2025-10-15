export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Zustand", "Tailwind", "React Query"] },
  { category: "Mobile", items: ["Capacitor", "PWA", "OAuth", "In-App Purchase"] },
  { category: "Backend/Infra", items: ["Django REST", "Docker", "AWS", "CI/CD"] },
  { category: "기획/디자인", items: ["Figma", "Builder.io", "Adobe XD", "Photoshop"] },
  { category: "데이터/마케팅", items: ["GA4", "GTM", "SEO", "AEO", "광고 분석"] },
];


