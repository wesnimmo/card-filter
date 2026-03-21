import { filterCards } from "../cards.filter";
import { mockCards } from "../cards.mock";


describe("filterCards", () => {

    test("returns all cards when no filters are selected", () => {

        const result = filterCards({
          cards: mockCards,
          selectedCategories: [],
          matchMode: "any",
          typeFilter: "all",
        });

        expect(result.length).toBe(mockCards.length);

    })

    test('returns only player cards when typeFilter is "player"', () => {
        const result = filterCards({
          cards: mockCards,
          selectedCategories: [],
          matchMode: "any",
          typeFilter: "player",
        });

        expect(result.length).toBeGreaterThan(0);
        expect(result.every((card) => card.type === "player")).toBe(true);;
      });

    test('filters cards by category when "military" is selected', () => {
      const result = filterCards({
        cards: mockCards,
        selectedCategories: ["military"],
        matchMode: "any",
        typeFilter: "all",
      });

      expect(result.length).toBeGreaterThan(0);
      expect(
        result.every((card) => card.categories.includes("military"))
      ).toBe(true);
    });

    test('returns cards that match any selected category when matchMode is "any"', () => {
      const result = filterCards({
        cards: mockCards,
        selectedCategories: ["military", "government"],
        matchMode: "any",
        typeFilter: "all",
      });

      expect(result.length).toBeGreaterThan(0);
      expect(
        result.every(
          (card) =>
            card.categories.includes("military") ||
            card.categories.includes("government")
        )
      ).toBe(true);
    });


    test('returns only cards that match all selected categories when matchMode is "all"', () => {
      const result = filterCards({
        cards: mockCards,
        selectedCategories: ["military", "government"],
        matchMode: "all",
        typeFilter: "all",
      });

      expect(result.length).toBeGreaterThan(0);
      expect(
        result.every(
          (card) =>
            card.categories.includes("military") &&
            card.categories.includes("government")
        )
      ).toBe(true);
    });


    test("filters cards by both type and category", () => {
      const result = filterCards({
        cards: mockCards,
        selectedCategories: ["military"],
        matchMode: "any",
        typeFilter: "player",
      });

      expect(result.length).toBeGreaterThan(0);

      expect(
        result.every(
          (card) =>
            card.type === "player" &&
            card.categories.includes("military")
        )
      ).toBe(true);
    });

    
    //This confirms the function handles zero matches correctly.
    test("returns empty array when no cards match filters", () => {
      const result = filterCards({
        cards: mockCards,
        selectedCategories: ["religion"],
        matchMode: "all",
        typeFilter: "player",
      });

      expect(result).toEqual([]);
    });


})