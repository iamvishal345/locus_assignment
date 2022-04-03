import { useCallback, useState } from "react";
import { KeyboardShortcut } from "../keypress-react";

export const ComponentTwo = () => {
  const [color, setColor] = useState("blue");

  return (
    <>
      <div className={`component ${color}`}></div>
      <KeyboardShortcut
        combo="alt b"
        description="Turn background color of ComponentOne to blue"
        callback={useCallback(() => setColor("blue"), [])}
      />
      <KeyboardShortcut
        combo="alt r"
        description="Turn background color of ComponentOne to red"
        callback={useCallback(() => setColor("red"), [])}
      />
    </>
  );
};
