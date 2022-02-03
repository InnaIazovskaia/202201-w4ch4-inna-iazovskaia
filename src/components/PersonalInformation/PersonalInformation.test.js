import { render, screen } from "@testing-library/react";
import PersonalInformation from "./PersonalInformation";

describe("Given a PersonalInformation component", () => {
  describe("When it's rendered", () => {
    test("Then it should display button with text 'Next'", () => {
      render(<PersonalInformation />);

      const button = screen.queryByRole("button", { name: "Next" });

      expect(button).toBeInTheDocument();
    });
  });
});
