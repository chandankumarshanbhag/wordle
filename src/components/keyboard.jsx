import clsx from "clsx";
import '../assets/keyboard.scss'

let keysGroup = [
  [
    { key: "Q", type: "KEY" },
    { key: "W", type: "KEY" },
    { key: "E", type: "KEY" },
    { key: "R", type: "KEY" },
    { key: "T", type: "KEY" },
    { key: "Y", type: "KEY" },
    { key: "U", type: "KEY" },
    { key: "I", type: "KEY" },
    { key: "O", type: "KEY" },
    { key: "P", type: "KEY" },
  ],
  [
    { key: "A", type: "KEY" },
    { key: "S", type: "KEY" },
    { key: "D", type: "KEY" },
    { key: "F", type: "KEY" },
    { key: "G", type: "KEY" },
    { key: "H", type: "KEY" },
    { key: "J", type: "KEY" },
    { key: "K", type: "KEY" },
    { key: "L", type: "KEY" },
  ],
  [
    { key: "ENTER", type: "SPECIALKEY" },
    { key: "Z", type: "KEY" },
    { key: "X", type: "KEY" },
    { key: "C", type: "KEY" },
    { key: "V", type: "KEY" },
    { key: "B", type: "KEY" },
    { key: "N", type: "KEY" },
    { key: "M", type: "KEY" },
    { key: "Backspace", type: "SPECIALKEY" },
  ],
];

export default function Keyboard() {
  return (
    <div className="keyboard-container p-2">
      <div className="keyboard">
        {keysGroup.map((group, index) => {
          return (
            <div
              className={clsx({
                ["key-group"]: true,
                ["px-5"]: Boolean(index % 2),
              })}
            >
              {group.map((key, index) => {
                return (
                  <button
                    className={clsx({
                      ["m-1 button  is-dark is-small key"]: true,
                      ["green"]: Boolean(index % 2),
                      ["disabled"]: index % 3,
                      ["yellow"]: index % 4,
                    })}
                  >
                    {key.key}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
