import { useEffect } from "react";
import { useKeyboardShortcutContext } from "./KeyboardShortcutContext";

const registerCombo = (
  keypressInstance,
  comboString,
  callback,
  description
) => {
  return keypressInstance.register_combo({
    keys: comboString,
    on_keydown: callback,
    description,
  });
};

export const KeyboardShortcut = ({
  combo: comboString,
  callback,
  description,
}) => {
  const { keypressInstance, updateActiveShortcuts } =
    useKeyboardShortcutContext();
  useEffect(() => {
    const combo = registerCombo(
      keypressInstance,
      comboString,
      callback,
      description
    );
    updateActiveShortcuts(1);
    return () => {
      keypressInstance.unregister_combo(combo);
      updateActiveShortcuts(-1);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback, description, comboString]);

  return null;
};
