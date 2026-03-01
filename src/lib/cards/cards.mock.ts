import type { Card } from "./cards.types";

export const mockCards: Card[] = [
  {
    id: "event-first-triumvirate",
    type: "event",
    title: "The First Triumvirate",
    image: "/img/placeholder/2.png",
    categories: ["government"],
    provocation: ["Senatorial obstruction", "Shared ambition"],
    dates: "60 BCE",
    regions: ["southern europe"],
    players: ["julius caesar", "pompey", "crassus"],
    impact:
      "A secret alliance that bypassed the Senate and secured Caesar’s path to Gaul and power.",
  },
  {
    id: "player-caesar-general",
    type: "player",
    title: "Caesar: The General",
    image: "/img/placeholder/3.png",
    categories: ["military", "government"],
    roles: ["consul", "general", "dictator"],
    dates: "100 BCE – 44 BCE",
    regions: ["northern europe", "southern europe"],
    events: ["Gallic Wars", "Crossing the Rubicon"],
    impact:
      "A military genius who transformed the Roman army into a force loyal to its commander.",
  },
  {
    id: "event-gallic-wars",
    type: "event",
    title: "The Gallic Wars",
    image: "/img/placeholder/4.png",
    categories: ["military", "artsLiterature", "government"],
    provocation: ["Tribal migration", "Political debt", "Desire for glory"],
    dates: "58 BCE – 50 BCE",
    regions: ["northern europe"],
    players: ["julius caesar", "vercingetorix"],
    impact:
      "A decade-long campaign that expanded Rome—and produced propaganda in Caesar’s Commentaries.",
  },
];
