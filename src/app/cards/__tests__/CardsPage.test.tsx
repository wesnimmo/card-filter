import { render, screen, fireEvent } from "@testing-library/react";
import CardsPage from "../page";

describe("CardsPage", () => {
    test('shows only player cards when the "Players" filter is clicked', () => {
        render(<CardsPage />);

        fireEvent.click(screen.getByRole("button", { name: "Players" }));

        expect(screen.getByText("Caesar: Military Genius")).toBeInTheDocument();
        expect(screen.queryByText("First Triumvirate Pact")).not.toBeInTheDocument();
        expect(screen.queryByText("Gallic Wars")).not.toBeInTheDocument();
    });

    test('clicking "Clear filters" resets sidebar filters and shows all cards', () => {
        render(<CardsPage />);

        fireEvent.click(screen.getByRole("button", { name: "Military" }));

        expect(screen.queryByText("First Triumvirate Pact")).not.toBeInTheDocument();

        fireEvent.click(screen.getByRole("button", { name: "Clear filters" }));

        expect(screen.getByText("First Triumvirate Pact")).toBeInTheDocument();
        expect(screen.getByText("Caesar: Military Genius")).toBeInTheDocument();
        expect(screen.getByText("Gallic Wars")).toBeInTheDocument();
    });

    test("clicking a card opens the modal with the correct card content", () => {
      render(<CardsPage />);

      fireEvent.click(screen.getByText("Caesar: Military Genius"));

      expect(screen.getByRole("dialog")).toBeInTheDocument();
      expect(screen.getAllByText("Caesar: Military Genius").length).toBeGreaterThan(0);
      expect(screen.getByText(/Proconsul/)).toBeInTheDocument();

      fireEvent.click(screen.getByRole("button", { name: "Show Dates" }));
      expect(screen.getByText(/50 BCE/i)).toBeInTheDocument();
    });

    test("pressing Escape closes the modal", () => {
      render(<CardsPage />);

      fireEvent.click(screen.getByText("Caesar: Military Genius"));

      expect(screen.getByRole("dialog")).toBeInTheDocument();

      fireEvent.keyDown(window, { key: "Escape" });

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    test("clicking the backdrop closes the modal", () => {
      render(<CardsPage />);

      // Open modal
      fireEvent.click(screen.getByText("Caesar: Military Genius"));

      const dialog = screen.getByRole("dialog");
      expect(dialog).toBeInTheDocument();

      // Click the backdrop (the outer modal container)
      fireEvent.click(dialog);

      // Modal should close
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    test("pressing ArrowRight shows the next card in the modal", () => {
      render(<CardsPage />);

      fireEvent.click(screen.getByText("First Triumvirate Pact"));

      expect(screen.getByRole("dialog")).toBeInTheDocument();
      expect(screen.getAllByText("First Triumvirate Pact").length).toBeGreaterThan(0);

      fireEvent.keyDown(window, { key: "ArrowRight" });

      expect(screen.getAllByText("Caesar: Military Genius").length).toBeGreaterThan(0);
    });


    test("clicking the eye toggle switches the modal overlay toggle state", () => {
      render(<CardsPage />);

      fireEvent.click(screen.getByText("Caesar: Military Genius"));

      expect(screen.getByRole("dialog")).toBeInTheDocument();

      const toggleButton = screen.getByRole("button", {
        name: /hide card details/i,
      });

      expect(toggleButton).toBeInTheDocument();

      fireEvent.click(toggleButton);

      expect(
        screen.getByRole("button", { name: /show card details/i })
      ).toBeInTheDocument();
    });


    test("navigating to next card resets overlay to visible state", () => {
      render(<CardsPage />);

      // Open modal
      fireEvent.click(screen.getByText("First Triumvirate Pact"));

      // Toggle overlay OFF
      fireEvent.click(
        screen.getByRole("button", { name: /hide card details/i })
      );

      // Confirm toggle changed
      expect(
        screen.getByRole("button", { name: /show card details/i })
      ).toBeInTheDocument();

      // Go to next card
      fireEvent.keyDown(window, { key: "ArrowRight" });

      // Overlay should reset (default = visible)
      expect(
        screen.getByRole("button", { name: /hide card details/i })
      ).toBeInTheDocument();
    });

});