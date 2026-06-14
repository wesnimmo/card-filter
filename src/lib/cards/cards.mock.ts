import type { Card } from "./cards.types";

export const mockCards: Card[] = [
  {
    id: "event-cilician-pirate-capture",
    type: "event",
    title: "Cilician Pirate Capture",
    image: "/img/placeholder/1.png",
    categories: ["military", "artsLiterature", "government"],
    dates: "75 BCE",
    regions: ["asia minor", "southern europe"],
    provocation: [
      "Voyage to Rhodes for Oratory Studies",
      "Pirate Dominance of the Mediterranean",
      "Insulted Ransom Demand"
    ],
    players: ["julius caesar"],
    impact: "Caesar raised his ransom to fifty talents, dominated his captors for thirty-eight days, raised a fleet, captured the pirates, and crucified them—slitting throats first as promised mercy."
  },
  
  {
    id: "event-funeral-oration-marius",
    type: "event",
    title: "Funeral Oration Ambush",
    image: "/img/placeholder/2.png",
    categories: ["government", "religion", "artsLiterature"],
    dates: "69 BCE",
    regions: ["southern europe"],
    provocation: [
      "Death of Aunt Julia",
      "Ban on Marian Imagery",
      "Sullan Senatorial Dominance"
    ],
    players: ["julius caesar"],
    impact: "Caesar turned a family funeral into a political rally by illegally displaying Marius's wax mask, claiming descent from Venus and Rome's kings, and challenging the Senatorial elite."
  },

  {
    id: "event-first-triumvirate-scheme",
    type: "event",
    title: "First Triumvirate Pact",
    image: "/img/placeholder/3.png",
    categories: ["government", "religion"],
    dates: "60 BCE",
    regions: ["southern europe"],
    provocation: [
      "Senatorial Obstruction",
      "Pompey's Land Reform Deadlock",
      "Crassus's Tax-Farmer Crisis"
    ],
    players: ["julius caesar", "pompey the great", "crassus"],
    impact: "A secret pact bypassed the Senate as Crassus's gold, Pompey's legions, and Caesar's genius formed an iron ring around the Republic for nearly a decade."
  },

  {
    id: "player-caesar-military-genius",
    type: "player",
    title: "Caesar: Military Genius",
    image: "/img/placeholder/4.png",
    categories: ["military", "government", "technology"],
    roles: ["Proconsul", "Military Engineer", "Master Strategist"],
    dates: "58 BCE – 50 BCE",
    regions: ["western europe", "southern europe", "northern europe"],
    events: ["The Siege of Alesia", "The Crossing of the Rhine", "The Battle of Pharsalus"],
    impact: "Charismatic political tactician. Military genius whose tactics are still studied and taught to this day. His decision to march his Army on Rome sparked civil war, and ended the republic."
  },

  {
    id: "player-iron-celtic-champion",
    type: "player",
    title: "Gauls: Terror of Rome",
    image: "/img/placeholder/5.png",
    categories: ["military", "technology"], // Mapped 'craftsmanship' to 'technology'
    roles: ["Oathsworn Noble", "Frenzy Warrior", "Master Blacksmith"],
    dates: "58 BCE – 50 BCE",
    regions: ["western europe"], // Mapped specific regions to our standard type
    events: [
      "The Battle of the Sambre", 
      "The Defense of Avaricum", 
      "The Relief of Alesia"
    ],
    impact: "Armed with iron broadswords and hexagonal shields, Gallic warriors used furor Gallicus—lightning charges and carnyx horns—to shatter legionary morale, forcing Caesar to rely on superior engineering."
  },

  {
    id: "player-blue-briton-barbarian",
    type: "player",
    title: "Blue Briton Warriors",
    image: "/img/placeholder/6.png",
    categories: ["military", "artsLiterature"],
    roles: ["Charioteer", "Tribal Noble", "Kinetic Warrior"],
    dates: "55 BCE – 54 BCE",
    regions: ["british isles"],
    events: ["Caesar's First Invasion of Britain", "The Landing at Kent", "The Battle of the Stour"],
    impact: "At the world's edge, Caesar's legions faced Britons painted in glass-tinted blue dyes, fighting from racing chariots in a kinetic style that terrified disciplined Roman infantry."
  },

  {
    id: "event-siege-of-alesia-iron-ring",
    type: "event",
    title: "Siege of Alesia",
    image: "/img/placeholder/7.png",
    categories: ["military", "technology", "government"],
    dates: "September 52 BCE",
    regions: ["western europe"],
    provocation: [
      "Vercingetorix's United Gallic Revolt",
      "Roman Retreat to the Province",
      "Gallic Relief Army Mobilization"
    ],
    players: ["julius caesar", "vercingetorix", "mark antony"],
    impact: "At Alesia, Caesar's legions moved two million cubic feet of earth in forty days, building twenty-five miles of walls to cage three hundred thousand enemies."
  },

  {
    id: "event-gallic-wars-the-pen",
    type: "event",
    title: "Gallic Wars",
    image: "/img/placeholder/8.png",
    categories: ["artsLiterature", "government", "military"],
    dates: "58 BCE – 50 BCE",
    regions: ["western europe", "southern europe"],
    provocation: [
      "Migration of the Helvetii",
      "Political Debt in Rome",
      "Desire for 'Gloria'"
    ],
    players: ["julius caesar"],
    impact: "While his legions conquered Gaul, Caesar's pen conquered truth—writing his Commentaries in third person to transform a decade of slaughter into propaganda for Rome's voters."
  },

  {
    id: "event-vercingetorix-surrender-alesia",
    type: "event",
    title: "Alesia Surrender",
    image: "/img/placeholder/9.png",
    categories: ["military", "government"],
    dates: "September 52 BCE",
    regions: ["western europe"],
    provocation: [
      "The Siege of Alesia",
      "Failure of the Gallic Relief Force",
      "Starvation of the Mandubii"
    ],
    players: ["julius caesar", "vercingetorix"],
    impact: "Vercingetorix surrendered by casting his weapons at Caesar's feet, signaling Celtic independence's death—Caesar's ultimate triumph and Gaul's end of an age."
  },

  {
    id: "event-crossing-the-rubicon",
    type: "event",
    title: "Crossing the Rubicon",
    image: "/img/placeholder/10.png",
    categories: ["military", "government", "religion"],
    dates: "January 10, 49 BCE",
    regions: ["southern europe"],
    provocation: [
      "Senatorial Ultimatum",
      "Stripping of Caesar's Command",
      "Threat of Prosecution in Rome"
    ],
    players: ["julius caesar"],
    impact: "One step changed the world. Caesar led the Thirteenth Legion across the sacred Rubicon, declaring 'the die is cast' and drowning the Republic in civil war."
  },

  {
    id: "event-battle-of-pharsalus",
    type: "event",
    title: "Battle of Pharsalus",
    image: "/img/placeholder/11.png",
    categories: ["military", "government"],
    dates: "August 9, 48 BCE",
    regions: ["southern europe"],
    provocation: [
      "Collapse of the First Triumvirate",
      "Senatorial Ultimatum",
      "Pompey's Choice to Fight in Greece"
    ],
    players: ["julius caesar", "pompey the great", "marcus brutus"],
    impact: "At Pharsalus, Caesar's veterans crushed Pompey's elite youth. By sunset, Pompey was a fugitive and the Senate's power was a memory after the Republic's suicidal battle."
  },

  {
    id: "event-dictator-perpetuo",
    type: "event",
    title: "Dictator for Life",
    image: "/img/placeholder/12.png",
    categories: ["government", "religion"],
    dates: "Early 44 BCE",
    regions: ["southern europe"],
    provocation: [
      "Title of Dictator Perpetuo",
      "Acceptance of the Golden Throne",
      "Violation of Republican Equality"
    ],
    players: ["julius caesar", "marcus brutus", "cassius"],
    impact: "Rome hated kings, yet Caesar sat on a golden throne as Dictator Perpetuo while the Senate's faked devotion masked the sharpening of twenty-three daggers."
  },
  
  {
    id: "event-cleopatra-caesar-scandal",
    type: "event",
    title: "Cleopatra in Rome",
    image: "/img/placeholder/13.png",
    categories: ["government", "religion"],
    dates: "46 BCE – 44 BCE",
    regions: ["southern europe", "north africa"],
    provocation: [
      "Presence of Caesarion",
      "Egyptian Court in Rome",
      "Fear of Hellenistic Monarchy"
    ],
    players: ["julius caesar", "cleopatra vii", "marcus brutus", "cicero"],
    impact: "To the Senate, Cleopatra was a Witch-Queen infecting Caesar with monarchy. Her Egyptian court in Rome broke vows and signaled the rise of an Eastern king."
  },

  {
    id: "event-ides-of-march-23-stabs",
    type: "event",
    title: "Ides of March",
    image: "/img/placeholder/14.png",
    categories: ["government", "artsLiterature"],
    dates: "March 15, 44 BCE",
    regions: ["southern europe"],
    provocation: [
      "Caesar named Dictator Perpetuo", 
      "Fear of Monarchy", 
      "Senatorial Envy"
    ],
    players: ["julius caesar", "marcus brutus", "cassius", "casca"],
    impact: "In a frenzy of twenty-three stabs, Rome's most powerful man fell at his rival's statue. Caesar's gaze on Brutus marked the end of friendship and Republic."
  },

  {
    id: "event-battle-of-philippi",
    type: "event",
    title: "Battle of Philippi",
    image: "/img/placeholder/15.png",
    categories: ["military", "government"],
    dates: "42 BCE",
    regions: ["southern europe"],
    provocation: ["The Assassination of Caesar", "The Proscriptions", "Republican Resistance"],
    players: ["mark antony", "octavian", "marcus brutus", "cassius"],
    impact: "On Philippi's plains, Antony's iron wall crushed the last Senators. Brutus's dreams died in mud as the Republic was buried and the Empire born in blood."
  },

  {
    id: "player-pompey-the-great",
    type: "player",
    title: "Pompey the Great",
    image: "/img/placeholder/16.png",
    categories: ["military", "government"],
    roles: ["Consul", "General", "Admiral", "The Teenage Butcher"],
    dates: "106 BCE – 48 BCE",
    regions: ["middle east", "north africa", "western europe", "southern europe"],
    events: [
      "Third Mithridatic War", 
      "Mediterranean Pirate Campaign", 
      "The First Triumvirate", 
      "The Great Civil War"
    ],
    impact: "Pompey expanded Rome to the Euphrates and professionalized the navy. His rivalry with Caesar sparked civil war, ultimately failing to stop autocracy's rise."
  },

  {
    id: "player-cleopatra-last-pharaoh",
    type: "player",
    title: "Cleopatra: Last Pharaoh",
    image: "/img/placeholder/17.png",
    categories: ["government", "military", "artsLiterature"],
    roles: ["Queen of Egypt (Pharaoh)", "Diplomat", "Naval Commander"],
    dates: "69 BCE – 30 BCE",
    regions: ["north africa", "southern europe", "middle east"],
    events: [
      "The Siege of Alexandria", 
      "The First Triumvirate's Collapse", 
      "The Battle of Actium"
    ],
    impact: "Cleopatra leveraged Egypt's wealth and intellect to preserve independence. Her alliances with Caesar and Antony reshaped Roman politics and triggered the Republic's fall to Empire."
  },

  {
    id: "player-brutus-tragic-liberator",
    type: "player",
    title: "Brutus: Tragic Liberator",
    image: "/img/placeholder/18.png",
    categories: ["government", "military"],
    roles: ["Praetor", "Senator", "Assassin", "The Last of the Romans"],
    dates: "85 BCE – 42 BCE",
    regions: ["southern europe", "asia minor"],
    events: [
      "Battle of Pharsalus",
      "The Ides of March",
      "Battle of Philippi"
    ],
    impact: "Brutus prioritized the Republic over friendship with Caesar. His tyrannicide failed to restore democracy, instead triggering chaos that solidified the imperial power he fought."
  },

  {
    id: "player-cassius-architect",
    type: "player",
    title: "Cassius: Death's Architect",
    image: "/img/placeholder/19.png",
    categories: ["government", "military"],
    roles: ["Senator", "General", "Assassin", "The Last Roman"],
    dates: "86 BCE – 42 BCE",
    regions: ["middle east", "southern europe", "asia minor"],
    events: [
      "Battle of Carrhae", 
      "The Ides of March", 
      "Battle of Philippi"
    ],
    impact: "Cassius transformed resentment into revolution behind Caesar's assassination. His failure at Philippi ended the Republic's last hope for a return to senatorial rule."
  },

  {
    id: "player-mark-antony-sword",
    type: "player",
    title: "Antony: Caesar's Sword",
    image: "/img/placeholder/20.png",
    categories: ["military", "government"],
    roles: ["Consul", "General", "Triumvir", "Master of the Horse"],
    dates: "83 BCE – 30 BCE",
    regions: ["western europe", "southern europe", "north africa", "middle east"],
    events: [
      "The Gallic Wars", 
      "The Ides of March", 
      "Battle of Philippi", 
      "Battle of Actium"
    ],
    impact: "Caesar's loyal lieutenant, Antony avenged his death with oratory and military might. His alliance with Cleopatra and rivalry with Octavian birthed the Empire."
  },

  {
    id: "player-octavian-heir",
    type: "player",
    title: "Octavian: Vengeful Heir",
    image: "/img/placeholder/21.png", // Assuming 21 based on your note
    categories: ["government", "military"],
    roles: ["Caesar’s Heir", "Triumvir", "General", "Son of a God"],
    dates: "63 BCE – 14 CE",
    regions: ["western europe", "northern europe", "north africa"],
    events: ["Battle of Mutina", "Second Triumvirate", "Battle of Philippi"],
    impact: "Eighteen when Caesar died, Octavian weaponized his name to seize the army, outmaneuvering Senate and Antony to end civil war and become Rome's first Emperor."
  },


  // {
  //   id: "event-first-triumvirate",
  //   type: "event",
  //   title: "The First Triumvirate",
  //   image: "/img/placeholder/2.png",
  //   categories: ["government"],
  //   provocation: ["Senatorial obstruction", "Shared ambition"],
  //   dates: "60 BCE",
  //   regions: ["southern europe"],
  //   players: ["julius caesar", "pompey", "crassus"],
  //   impact:
  //     "A secret alliance that bypassed the Senate and secured Caesar’s path to Gaul and power.",
  // },
  // {
  //   id: "player-caesar-general",
  //   type: "player",
  //   title: "Caesar: The General",
  //   image: "/img/placeholder/3.png",
  //   categories: ["military", "government"],
  //   roles: ["consul", "general", "dictator"],
  //   dates: "100 BCE – 44 BCE",
  //   regions: ["northern europe", "southern europe"],
  //   events: ["Gallic Wars", "Crossing the Rubicon"],
  //   impact:
  //     "A military genius who transformed the Roman army into a force loyal to its commander.",
  // },
  // {
  //   id: "event-gallic-wars",
  //   type: "event",
  //   title: "The Gallic Wars",
  //   image: "/img/placeholder/4.png",
  //   categories: ["military", "artsLiterature", "government"],
  //   provocation: ["Tribal migration", "Political debt", "Desire for glory"],
  //   dates: "58 BCE – 50 BCE",
  //   regions: ["northern europe"],
  //   players: ["julius caesar", "vercingetorix"],
  //   impact:
  //     "A decade-long campaign that expanded Rome—and produced propaganda in Caesar’s Commentaries.",
  // },
];
