import Image from "next/image";

export default function MockupFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 overflow-hidden">
      <div className="h-8 bg-black/10 dark:bg-white/10 flex items-center gap-1 px-3">
        <span className="size-3 rounded-full bg-red-400" />
        <span className="size-3 rounded-full bg-yellow-400" />
        <span className="size-3 rounded-full bg-green-400" />
      </div>
      <div className="relative aspect-[16/10]">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
}


