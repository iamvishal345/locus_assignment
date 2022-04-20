import keypress from "keypress.js";
import { createContext, useContext, useMemo, useState } from "react";

const KeyboardShortcut = createContext({
  keypressInstance: null,
  activeShortcuts: [],
  updateActiveShortcuts: () => {},
});

export const useKeyboardShortcutContext = () => useContext(KeyboardShortcut);

export const KeyboardShortcutProvider = ({ children }) => {
  const [activeShortcutsCount, setActiveShortcutsCount] = useState(0);
  const keypressInstance = useMemo(() => new keypress.Listener(), []);
  const activeShortcuts = useMemo(
    () =>
      keypressInstance
        .get_registered_combos()
        .map(({ description, keys }) => ({
          description,
          combo: keys.join("+"),
        })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeShortcutsCount]
  );

  const updateActiveShortcuts = (action) => {
    setActiveShortcutsCount(activeShortcuts + action);
  };

  return (
    <KeyboardShortcut.Provider
      value={{ keypressInstance, activeShortcuts, updateActiveShortcuts }}
    >
      {children}
    </KeyboardShortcut.Provider>
  );
};
