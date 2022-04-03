import { useCallback, useState } from "react";
import { KeyboardShortcut } from "../keypress-react";

export const ComponentThree = () => {
  const [color, setColor] = useState("blue");

  return (
    <>
      <div className={`component ${color}`}></div>
      <KeyboardShortcut
        combo="shift x v"
        description="Turn background color of ComponentOne to blue"
        callback={useCallback(() => setColor("blue"), [])}
      />
      <KeyboardShortcut
        combo="shift x d"
        description="Turn background color of ComponentOne to red"
        callback={useCallback(() => setColor("red"), [])}
      />
    </>
  );
};
