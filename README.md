# react-keypress

The input capture library for react built around keypress.js library.

[Demo](https://iamvishal345.github.io/locus_assignment)

## Use and setup

- Import `KeyboardShortcutProvider` from `react-keypress` in `App.js` and wrap your application in this to initialize the keypress.js
- To use in a component Import `KeyboardShortcut` from `react-keypress`

  ```js
  import { useCallback, useState } from "react";
  import { KeyboardShortcut } from "../keypress-react";

  export const ComponentThree = () => {
    const [color, setColor] = useState("blue");

    return (
      <div>
        <div className={`component ${color}`}></div>
        <KeyboardShortcut
          combo="shift b"
          description="Turn background color of ComponentOne to blue"
          callback={useCallback(() => setColor("blue"), [])}
        />
        <KeyboardShortcut
          combo="shift r"
          description="Turn background color of ComponentOne to red"
          callback={useCallback(() => setColor("red"), [])}
        />
      </div>
    );
  };
  ```

- To get the list of all the registered keyboard shortcuts import `useKeyboardShortcutContext` hook from `react-keypress`

  ```js
  import { useKeyboardShortcutContext } from "../keypress-react";

  export const ComponentFour = () => {
    const { activeShortcuts } = useKeyboardShortcutContext();

    return (
      <div className="component">
        <dl className="inline-list">
          {activeShortcuts.map((activeShortcut, i) => (
            <div className="list-item" key={activeShortcut.combo + i}>
              <dt>{activeShortcut.combo}</dt>
              <dd>{activeShortcut.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    );
  };
  ```
