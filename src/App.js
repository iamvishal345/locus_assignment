import { useState } from "react";
import "./App.css";
import { ComponentFour } from "./components/ComponentFour";
import { ComponentOne } from "./components/ComponentOne";
import { ComponentThree } from "./components/ComponentThree";
import { ComponentTwo } from "./components/ComponentTwo";
import { KeyboardShortcutProvider } from "./keypress-react";

function App() {
  const [remove, setRemove] = useState(true);
  return (
    <KeyboardShortcutProvider>
      <div className="App">
        <ComponentOne />
        <ComponentTwo />
        {remove && <ComponentThree />}
        <div>
          <ComponentFour />
          {/* Test  if activeShortcuts array updates */}
          <button onClick={() => setRemove(!remove)}>Toggle</button>
        </div>
      </div>
    </KeyboardShortcutProvider>
  );
}

export default App;
