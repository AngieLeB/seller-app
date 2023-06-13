import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from ".";

const counterValue = () => screen.getByLabelText("counterValue");
const incButton = () => screen.getByRole("button", { name: "+1" });
const decButton = () => screen.getByRole("button", { name: "-1" });

//test suite
describe("Counter", () => {
  it("renders counter value, + and - buttons", () => {
    render(<Counter />);
    //assertion
    expect(counterValue()).toHaveTextContent("0");
    expect(incButton()).toBeInTheDocument();
    expect(decButton()).toBeInTheDocument();
  });

  it("increments and decrements while clicking on +/- buttons", () => {
    render(<Counter />);
    userEvent.click(incButton());
    expect(counterValue()).toHaveTextContent("1");
    userEvent.click(decButton());
    expect(counterValue()).toHaveTextContent("0");
  });
});
