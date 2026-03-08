import type { Card } from "./cards.types";

export const mockCards: Card[] = [
  {
    id: "event-cilician-pirate-capture",
    type: "event",
    title: "Capture by Cilician Pirates: The Ransomed King",
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
    impact: "Long before he was a dictator, Caesar displayed terrifying confidence by demanding his own ransom be raised to 50 talents of silver. After treating his captors like subordinates for 38 days, he raised a private navy on his own authority, captured the pirates, and fulfilled his promise to crucify them all—showing his characteristic blend of ruthlessness and calculated 'mercy' by slitting their throats first."
  },
  
  {
    id: "event-funeral-oration-marius",
    type: "event",
    title: "The Funeral Oration: The Rhetorical Ambush",
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
    impact: "Caesar turned a family funeral into a high-stakes political rally by illegally displaying the wax mask of the outlawed hero Gaius Marius. By publicly claiming descent from the goddess Venus and the Roman kings, he rebranded the 'Populares' faction and signaled his arrival as a fearless challenger to the Senatorial elite."
  },

  {
    id: "event-first-triumvirate-scheme",
    type: "event",
    title: "The First Triumvirate: The Three-Headed Monster",
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
    impact: "A secret 'gentleman’s agreement' that bypassed the Senate to rule Rome from the shadows. By combining Crassus’s gold, Pompey’s legions, and Caesar’s political genius, the three men built an iron ring around the Republic, ensuring that no law passed without their collective 'okay' for nearly a decade."
  },

  {
    id: "player-caesar-military-genius",
    type: "player",
    title: "Julius Caesar: Military Genius",
    image: "/img/placeholder/4.png",
    categories: ["military", "government", "technology"],
    roles: ["Proconsul", "Military Engineer", "Master Strategist"],
    dates: "58 BCE – 50 BCE",
    regions: ["western europe", "southern europe", "northern europe"],
    events: ["The Siege of Alesia", "The Crossing of the Rhine", "The Battle of Pharsalus"],
    impact: "A master of celeritas (speed) and engineering, Caesar transformed the Roman military into a continental juggernaut. By constructing massive fortifications and bridges in record time, he proved that no terrain—neither the Rhine nor the Gallic forests—could stop Roman hegemony, using his conquest as a springboard to dismantle the Republic."
  },

  {
    id: "player-iron-celtic-champion",
    type: "player",
    title: "The Gallic Champion: The Iron Tempest",
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
    impact: "Armed with iron broadswords and hexagonal shields, Gallic warriors relied on psychological momentum and 'furor Gallicus'—a lightning-fast charge accompanied by the blare of carnyx horns. Their raw physical power frequently shattered the morale of seasoned legionaries, forcing Caesar to rely on superior engineering to survive."
  },

  {
    id: "player-blue-briton-barbarian",
    type: "player",
    title: "The Blue Briton: The Terror of Albion",
    image: "/img/placeholder/6.png",
    categories: ["military", "artsLiterature"],
    roles: ["Charioteer", "Tribal Noble", "Kinetic Warrior"],
    dates: "55 BCE – 54 BCE",
    regions: ["british isles"],
    events: ["Caesar's First Invasion of Britain", "The Landing at Kent", "The Battle of the Stour"],
    impact: "At the world's edge, Caesar’s legions met a nightmare in blue. Painted in shimmering glass-tinted dyes and fighting from the tongues of racing chariots, the Britons utilized a 'kinetic' style of warfare that terrified the disciplined Roman infantry and marked the limits of the known world."
  },

  {
    id: "event-siege-of-alesia-iron-ring",
    type: "event",
    title: "The Siege of Alesia: The Iron Ring",
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
    impact: "At Alesia, Caesar didn't just fight the Gauls; he built a cage for them. In 40 days, his legions moved 2 million cubic feet of earth to create 25 miles of walls and hidden death-traps. Surrounded by 300,000 enemies, Caesar’s engineering turned a siege into a fortress and a fortress into a tomb."
  },

  {
    id: "event-gallic-wars-the-pen",
    type: "event",
    title: "The Gallic Wars: The Master of the Narrative",
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
    impact: "While his legions conquered the land, Caesar’s pen conquered the truth. By writing his 'Commentaries' in the third person, he transformed a decade of illegal slaughter into a masterpiece of Roman destiny. In the flicker of a lamp, he wasn't just recording history—he was inventing it for the voters back in Rome."
  },

  {
    id: "event-vercingetorix-surrender-alesia",
    type: "event",
    title: "The King’s Submission: The Fall of Alesia",
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
    impact: "Vercingetorix did not surrender with a whimper, but with a final, silent act of royalty. By casting his weapons into the Roman mud at Caesar’s feet, the King of the Gauls signaled the death of Celtic independence. For Caesar, this was the ultimate triumph; for Gaul, it was the end of an age."
  },

  {
    id: "event-crossing-the-rubicon",
    type: "event",
    title: "Crossing the Rubicon: The Die is Cast",
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
    impact: "One step changed the world. Facing the choice between political ruin and civil war, Caesar shattered Roman law by leading the 13th Legion across the sacred boundary of the Rubicon. 'Alea Iacta Est'—the die was cast, and the Republic was drowned in the ripples of a shallow stream."
  },

  {
    id: "event-battle-of-pharsalus",
    type: "event",
    title: "The Battle of Pharsalus: The Broken Eagle",
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
    impact: "At Pharsalus, the Republic committed suicide. Caesar’s hardened veterans faced off against the elite youth of Rome in a dust-choked nightmare. 'Strike at the face!' Caesar commanded, knowing the aristocrats feared disfigurement more than death. By sunset, the legendary Pompey was a fugitive and the Senate's power was a memory."
  },

  {
    id: "event-dictator-perpetuo",
    type: "event",
    title: "Dictator for Life: The Gilded Cage",
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
    impact: "Rome was built on the hatred of kings, yet here sat a man on a throne of gold. Clad in the robes of a god and granted power without end, Caesar became 'Dictator Perpetuo.' In the hallowed halls of the Senate, the faked devotion of the elite masked the sharpening of twenty-three daggers."
  },
  
  {
    id: "event-cleopatra-caesar-scandal",
    type: "event",
    title: "The Shadow of the Nile: The Queen in Rome",
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
    impact: "To the Roman Senate, Cleopatra wasn't a mistress—she was a 'Witch-Queen' infecting their leader with the desire for absolute monarchy. By bringing an Egyptian 'Princeling' to the heart of the Republic, Caesar didn't just break his marriage vows; he broke the Roman soul and signaled the rise of an Eastern King."
  },

  {
    id: "event-ides-of-march-23-stabs",
    type: "event",
    title: "The Ides of March: 23 Stabs of Liberty",
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
    impact: "In a frenzy of 23 stabs, the most powerful man in the world was butchered at the feet of his rival's statue. As Caesar looked into the eyes of his protégé Brutus, he saw the end of friendship and the birth of a new, bloodier era—a moment immortalized for centuries in literature and drama."
  },

  {
    id: "event-battle-of-philippi",
    type: "event",
    title: "The Battle of Philippi: The Shadow’s Vengeance",
    image: "/img/placeholder/15.png",
    categories: ["military", "government"],
    dates: "42 BCE",
    regions: ["southern europe"],
    provocation: ["The Assassination of Caesar", "The Proscriptions", "Republican Resistance"],
    players: ["mark antony", "octavian", "marcus brutus", "cassius"],
    impact: "On the plains of Philippi, the ghost of Caesar came to claim his due. As Mark Antony’s iron wall crushed the last of the Senators, the dreams of Brutus died in the mud. The Republic was buried; the Empire was born in its blood."
  },

  {
    id: "player-pompey-the-great",
    type: "player",
    title: "Pompey the Great: The Aging Lion",
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
    impact: "Known as 'The Great,' Pompey expanded Rome’s borders to the Euphrates and professionalized the Navy. His rivalry with Caesar transformed a political disagreement into a global civil war, ultimately failing to protect the Republic from the rise of autocracy."
  },

  {
    id: "player-cleopatra-last-pharaoh",
    type: "player",
    title: "Cleopatra VII: The Last Pharaoh",
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
    impact: "The last active ruler of the Ptolemaic Kingdom, Cleopatra leveraged her vast wealth and intellect to preserve Egyptian independence. Her alliances with Caesar and Antony fundamentally reshaped Roman politics, eventually triggering the transition from Republic to Empire."
  },

  {
    id: "player-brutus-tragic-liberator",
    type: "player",
    title: "Marcus Brutus: The Tragic Liberator",
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
    impact: "A devoted Stoic, Brutus prioritized the Republic's survival over his personal friendship with Caesar. His act of tyrannicide failed to restore democracy, instead triggering a decade of chaos that ultimately solidified the imperial power he sought to destroy."
  },

  {
    id: "player-cassius-architect",
    type: "player",
    title: "Cassius: The Architect of Death",
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
    impact: "The strategic mind behind Caesar’s assassination, Cassius transformed private resentment into a public revolution. A brilliant military commander, his failure to defeat Octavian and Antony at Philippi ended the Republic's last hope for a return to senatorial rule."
  },

  {
    id: "player-mark-antony-sword",
    type: "player",
    title: "Mark Antony: The Sword of Caesar",
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
    impact: "Caesar's most loyal lieutenant and a brilliant cavalry commander, Antony's oratory and military might avenged Caesar’s death. His ultimate alliance with Cleopatra and his rivalry with Octavian sparked the final war that transformed the Roman Republic into the Empire."
  },

  {
    id: "player-octavian-heir",
    type: "player",
    title: "Octavian: The Vengeful Heir",
    image: "/img/placeholder/21.png", // Assuming 21 based on your note
    categories: ["government", "military"],
    roles: ["Caesar’s Heir", "Triumvir", "General", "Son of a God"],
    dates: "63 BCE – 14 CE",
    regions: ["western europe", "northern europe", "north africa"],
    events: ["Battle of Mutina", "Second Triumvirate", "Battle of Philippi"],
    impact: "Only eighteen when Caesar was murdered, Octavian weaponized his great-uncle’s name to seize control of the army. By ruthlessly outmaneuvering both the Senate and Mark Antony, he ended a century of civil war to become Augustus, Rome's first Emperor."
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
