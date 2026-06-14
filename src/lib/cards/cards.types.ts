export type Category =
  | "military"
  | "government"
  | "religion"
  | "artsLiterature"
  | "technology";

export type Region = 

| "southern europe"
| "western europe"
| "northern europe"

| "british isles"
| "eastern europe"
| "asia minor"

| "middle east"
| "north africa"
| "north america";

export type PlayerId =
  | "julius caesar"
  | "pompey the great"
  | "crassus"
  | "vercingetorix"
  | "mark antony"
  | "marcus brutus"
  | "cassius"
  | "cleopatra vii"
  | "cicero"
  | "casca"
  | "octavian";

export type CardType = "player" | "event";

type BaseCard = {
  id: string;
  type: CardType;
  title: string; // Headline: 4 words or fewer
  image: string;
  categories: Category[];
  dates: string;
  regions: Region[];
  impact: string;
};

export type EventCard = BaseCard & {
  type: "event";
  provocation: string[];
  players: PlayerId[];
};

export type PlayerCard = BaseCard & {
  type: "player";
  roles: string[];
  events: string[];
};

export type Card = EventCard | PlayerCard;

export type TypeFilter = "all" | CardType;
export type MatchMode = "any" | "all";
