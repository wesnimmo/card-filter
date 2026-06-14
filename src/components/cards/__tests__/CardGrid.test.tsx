import { render, screen, fireEvent } from "@testing-library/react";
import { CardGrid } from "../CardGrid";
import { mockCards } from "@/lib/cards/cards.mock";

describe("CardGrid", () => {

  test("renders card titles passed in through props", () => {

    render(<CardGrid cards={mockCards} onSelectIndex={() => {}} />);

    expect(screen.getByText("First Triumvirate Pact")).toBeInTheDocument();
    expect(screen.getByText("Caesar: Military Genius")).toBeInTheDocument();
    expect(screen.getByText("Gauls: Terror of Rome")).toBeInTheDocument();
  });

  test("calls onSelectIndex with the correct index when a card is clicked", () => {
      const onSelectIndex = jest.fn();

      render(<CardGrid cards={mockCards} onSelectIndex={onSelectIndex} />);

      fireEvent.click(screen.getByText("Funeral Oration Ambush"));

      expect(onSelectIndex).toHaveBeenCalledWith(1);
  });

});