import type { Category, PlayerId, Region } from "./cards.types";

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

export const REGION_LABEL: Record<Region, string> = {
  "southern europe": "Southern Europe",
  "western europe": "Western Europe",
  "northern europe": "Northern Europe",
  "british isles": "British Isles",
  "eastern europe": "Eastern Europe",
  "asia minor": "Asia Minor",
  "middle east": "Middle East",
  "north africa": "North Africa",
  "north america": "North America",
};

export const REGION_LIST: Region[] = [
  "southern europe",
  "western europe",
  "northern europe",
  "british isles",
  "eastern europe",
  "asia minor",
  "middle east",
  "north africa",
  "north america",
];

export const PLAYER_LABEL: Record<PlayerId, string> = {
  "julius caesar": "Julius Caesar",
  "pompey the great": "Pompey the Great",
  crassus: "Crassus",
  vercingetorix: "Vercingetorix",
  "mark antony": "Mark Antony",
  "marcus brutus": "Marcus Brutus",
  cassius: "Cassius",
  "cleopatra vii": "Cleopatra VII",
  cicero: "Cicero",
  casca: "Casca",
  octavian: "Octavian",
};

export const PLAYER_CARD_ID: Partial<Record<PlayerId, string>> = {
  "julius caesar": "player-caesar-military-genius",
  "pompey the great": "player-pompey-the-great",
  "mark antony": "player-mark-antony-sword",
  "marcus brutus": "player-brutus-tragic-liberator",
  cassius: "player-cassius-architect",
  "cleopatra vii": "player-cleopatra-last-pharaoh",
  octavian: "player-octavian-heir",
};