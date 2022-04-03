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
