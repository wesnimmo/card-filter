import type { Category } from "./cards.types";

export const CATEGORY_LABEL: Record<Category, string> = {
  military: "Military",
  government: "Government",
  religion: "Religion",
  artsLiterature: "Arts-Literature",
  technology: "Technology",
};

export const CATEGORY_COLOR: Record<Category, string> = {
  military: "bg-purple-700",
  government: "bg-blue-700",
  religion: "bg-amber-700",
  artsLiterature: "bg-green-700",
  technology: "bg-slate-700",
};

export const CATEGORY_LIST: Category[] = [
  "military",
  "government",
  "religion",
  "artsLiterature",
  "technology",
];