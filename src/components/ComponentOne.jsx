import { useCallback, useMemo, useState } from "react";
import { KeyboardShortcut } from "../keypress-react";

// A lot of `useCallbacks` are used. Why are they used? Can't any of them be avoided?
// Implementation of case where we may need to toggle the function passed to already rendered KeyboardShortcut so need to pass memoized version of function
// as it is passed as dep to use effect in KeyboardShortcut component
export const ComponentOne = () => {
  const [color, setColor] = useState("blue");
  const [toggleCallback, setToggleCallback] = useState(true);

  const f1 = useCallback(() => {
    console.log("Passed function 1");
    setColor("green");
  }, []);

  const f2 = useCallback(() => {
    console.log("Passed function 2");
    setColor("red");
  }, []);

  const callback = useMemo(() => {
    if (toggleCallback) {
      return f1;
    }
    return f2;
  }, [f1, f2, toggleCallback]);

  return (
    <>
      <div className={`component ${color}`}>
        <button onClick={() => setToggleCallback(!toggleCallback)}>
          Toggle Callback function
        </button>
      </div>
      <KeyboardShortcut
        combo="shift b"
        description="Turn background color of ComponentOne to blue"
        callback={useCallback(() => setColor("blue"), [])}
      />
      <KeyboardShortcut
        combo="shift r"
        description="Turn background color of ComponentOne to red"
        callback={callback}
      />
    </>
  );
};
