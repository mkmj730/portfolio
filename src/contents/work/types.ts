export type HeadingBlock = { type: "heading"; level: 1 | 2 | 3 | 4; text: string };
export type ParagraphBlock = { type: "paragraph"; text: string };
export type ListBlock = { type: "list"; ordered?: boolean; items: string[] };
export type ImageBlock = { type: "image"; src: string; alt?: string; caption?: string };
export type QuoteBlock = { type: "quote"; text: string; cite?: string };
export type CodeBlock = { type: "code"; lang?: string; code: string };
export type CalloutBlock = { type: "callout"; icon?: string; text: string };

export type Block =
  | HeadingBlock
  | ParagraphBlock
  | ListBlock
  | ImageBlock
  | QuoteBlock
  | CodeBlock
  | CalloutBlock;

export type WorkContent = {
  slug: string;
  blocks: Block[];
};


