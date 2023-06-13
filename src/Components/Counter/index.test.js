import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from ".";

const counterValue = () => screen.getByLabelText("counterValue");
const incButton = ({ step = 1 } = {}) =>
  screen.getByRole("button", { name: `+${step}` });
const decButton = ({ step = 1 } = {}) =>
  screen.getByRole("button", { name: `-${step}` });

//test suite
describe("Counter", () => {
  it("renders counter value, + and - buttons", () => {
    render(<Counter />);
    //assertion
    expect(counterValue()).toHaveTextContent(/^0$/);
    expect(incButton()).toBeInTheDocument();
    expect(decButton()).toBeInTheDocument();
  });

  it("increments and decrements while clicking on +/- buttons", () => {
    render(<Counter />);
    userEvent.click(incButton());
    expect(counterValue()).toHaveTextContent(/^1$/);
    userEvent.click(decButton());
    expect(counterValue()).toHaveTextContent(/^0$/);
  });
});

describe("while startValue === 10", () => {
  it("renders counter value", () => {
    render(<Counter startValue={10} />);
    expect(counterValue()).toHaveTextContent(/^10$/);
  });

  it("increments and decrements while clicking on +/- buttons", () => {
    render(<Counter startValue={10} />);
    userEvent.click(incButton());
    expect(counterValue()).toHaveTextContent(/^11$/);
    userEvent.click(decButton());
    expect(counterValue()).toHaveTextContent(/^10$/);
  });
});

describe("while step == 4", () => {
  const step = 4;
  it("renders counter value", () => {
    render(<Counter step={step} />);
    expect(counterValue()).toHaveTextContent(/^0$/);
  });

  it("increments and decrements while clicking on +/- buttons", () => {
    render(<Counter step={step} />);
    userEvent.click(incButton({ step }));
    expect(counterValue()).toHaveTextContent(/^4$/);
    userEvent.click(decButton({ step }));
    expect(counterValue()).toHaveTextContent(/^0$/);
  });
});
