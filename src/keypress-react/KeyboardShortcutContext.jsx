import keypress from "keypress.js";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const KeyboardShortcut = createContext({
  keypressInstance: null,
  activeShortcuts: [],
  updateActiveShortcuts: (shortcut) => {},
  removeShortcut: (combo) => {},
});

export const useKeyboardShortcutContext = () => useContext(KeyboardShortcut);

export const KeyboardShortcutProvider = ({ children }) => {
  const [activeShortcuts, setActiveShortcuts] = useState([]);

  const updateActiveShortcuts = useCallback((shortcut) => {
    setActiveShortcuts((activeShortcuts) => [...activeShortcuts, shortcut]);
  }, []);

  const keypressInstance = useMemo(() => new keypress.Listener(), []);

  const removeShortcut = useCallback(
    (combo) =>
      setActiveShortcuts((activeShortcuts) =>
        activeShortcuts.filter((shortcut) => shortcut.comboObject !== combo)
      ),
    []
  );

  return (
    <KeyboardShortcut.Provider
      value={{
        activeShortcuts,
        updateActiveShortcuts,
        removeShortcut,
        keypressInstance,
      }}
    >
      {children}
    </KeyboardShortcut.Provider>
  );
};
