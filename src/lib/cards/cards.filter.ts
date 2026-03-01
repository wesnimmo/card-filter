import type { Card, Category, MatchMode, TypeFilter } from "./cards.types";

export function filterCards(args: {
  cards: Card[];
  selectedCategories: Category[];
  matchMode: MatchMode;
  typeFilter: TypeFilter;
}): Card[] {
  const { cards, selectedCategories, matchMode, typeFilter } = args;

  return cards.filter((card) => {
    if (typeFilter !== "all" && card.type !== typeFilter) return false;
    //if one side of && is false then The code does NOT 'return false' and stop
    //  it proceeds down cause there was NO RETURN
    //gaurd clause- stop bad data from proceeding further
    //If you returned true the moment the type matched, you would have a bug!
    // The Bug: If you selected "Players" AND "Military", a "Player" card that is not "Military" would show up anyway because the function would have returned true at the first line and never checked the categories. Think fizz-buzz
    
    if (selectedCategories.length === 0) return true; //EVERY CARD GETS DISPLAYED

    // const matches = selectedCategories.map((cat) => card.categories.includes(cat));
    // return matchMode === "all" ? matches.every(Boolean) : matches.some(Boolean);

    // This does the exact same thing as above but is slightly more efficient:
    return matchMode === "all" 
      ? selectedCategories.every((cat) => card.categories.includes(cat))
      : selectedCategories.some((cat) => card.categories.includes(cat));
  });
}



