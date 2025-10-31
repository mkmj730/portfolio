import type { Block } from "../work/types";

export type ColumnArticle = {
  slug: string;
  title: string;
  excerpt?: string;
  cover?: string;
  blocks: Block[];
};

export type { Block };


