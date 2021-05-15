import { act, render, screen } from "@testing-library/react";
import App from "./App";

describe("Give Thanks App", () => {
  test("renders increment button", () => {
    act(() => {
      render(<App />);
    });
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
