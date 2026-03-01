export type Category =
  | "military"
  | "government"
  | "religion"
  | "artsLiterature"
  | "technology";

export type CardType = "player" | "event";

type BaseCard = {
  id: string;
  type: CardType;
  title: string;
  image: string;
  categories: Category[];
  dates: string;
  regions: string[];
  impact: string;
};

export type EventCard = BaseCard & {
  type: "event";
  provocation: string[];
  players: string[];
};

export type PlayerCard = BaseCard & {
  type: "player";
  roles: string[];
  events: string[];
};

export type Card = EventCard | PlayerCard;

export type TypeFilter = "all" | CardType;
export type MatchMode = "any" | "all";
