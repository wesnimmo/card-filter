import { render, screen, fireEvent } from "@testing-library/react";
import { CardGrid } from "../CardGrid";
import { mockCards } from "@/lib/cards/cards.mock";

describe("CardGrid", () => {

  test("renders card titles passed in through props", () => {

    render(<CardGrid cards={mockCards} onSelectIndex={() => {}} />);

    expect(screen.getByText("The First Triumvirate: The Three-Headed Monster")).toBeInTheDocument();
    expect(screen.getByText("Julius Caesar: Military Genius")).toBeInTheDocument();
    expect(screen.getByText("The Gauls: Terror of Rome")).toBeInTheDocument();
  });

    test("calls onSelectIndex with the correct index when a card is clicked", () => {
        const onSelectIndex = jest.fn();

        render(<CardGrid cards={mockCards} onSelectIndex={onSelectIndex} />);

        fireEvent.click(screen.getByText("The Funeral Oration: The Rhetorical Ambush"));

        expect(onSelectIndex).toHaveBeenCalledWith(1);
      });

});