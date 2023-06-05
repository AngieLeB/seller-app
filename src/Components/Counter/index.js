import React from "react";

export default function Counter({ startValue = 0, step = 1 }) {
  const [currentValue, setValue] = React.useState(startValue);
  return (
    <>
      <p>{currentValue}</p>
      <button
        onClick={() => {
          setValue(currentValue + step);
        }}
      >
        Clik me
      </button>
    </>
  );
}
