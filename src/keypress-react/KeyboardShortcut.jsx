import { useEffect } from "react";
import { useKeyboardShortcutContext } from "./KeyboardShortcutContext";

export const KeyboardShortcut = ({
  combo: comboString,
  callback,
  description,
}) => {
  const { keypressInstance, updateActiveShortcuts, removeShortcut } =
    useKeyboardShortcutContext();
  useEffect(() => {
    if (!keypressInstance) return;
    const combo = keypressInstance.register_combo({
      keys: comboString,
      on_keydown: callback,
    });

    updateActiveShortcuts({
      description,
      combo: comboString,
      comboObject: combo,
    });
    return () => {
      keypressInstance.unregister_combo(combo);
      removeShortcut(combo);
    };
  }, [
    callback,
    updateActiveShortcuts,
    keypressInstance,
    description,
    comboString,
    removeShortcut,
  ]);

  return null;
};
