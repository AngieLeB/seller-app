import { useCounter } from "react-use";
import { number } from "prop-types";

export default function Counter({ startValue = 0, step = 1 }) {
  const [currentValue, { inc, dec }] = useCounter(startValue, null, startValue);
  return (
    <>
      <p aria-label="counterValue">{currentValue}</p>
      <button onClick={() => dec(step)}>-{step}</button>
      <button onClick={() => inc(step)}>+{step}</button>
    </>
  );
}
Counter.propTypes = { startValue: number, step: number };
