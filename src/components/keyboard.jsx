import clsx from "clsx";
import "../assets/keyboard.scss";
import BackspaceSvg from "../assets/images/backspace.svg";
import { createEffect, createSignal } from "solid-js";

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
    { key: "BACKSPACE", type: "SPECIALKEY", icon: BackspaceSvg },
  ],
];

export default function Keyboard(props) {
  let [keysTyped, setKeysTyped] = createSignal({});
  createEffect(() => {
    setKeysTyped(
      props.game.boardState
        .slice(0, props.game.currentRow)
        .reduce((acc, word) => {
          let letters = word.split("");
          letters.forEach((letter, index) => {
            if (props.game.solution.includes(letter)) {
              if (props.game.solution[index] === letter) {
                acc[letter] = "CORRECT";
              } else if (acc[letter] != "CORRECT") {
                acc[letter] = "PRESENT";
              }
            } else if(acc[letter] != "CORRECT" && acc[letter] != "PRESENT") {
              acc[letter] = "ABSENT";
            }
          });
          return acc;
        }, {})
    );
  });

  console.log("keysTyped", keysTyped());

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
                let keyState = keysTyped()[key.key];
                console.log("keyState", keyState);
                return (
                  <button
                    className={clsx({
                      ["button  is-dark is-small key"]: true,
                      ["green"]: keyState == "CORRECT",
                      ["disabled"]: keyState == "ABSENT",
                      ["yellow"]: keyState == "PRESENT",
                      ["special-key"]: key.type === "SPECIALKEY",
                    })}
                    onClick={() => props.keydown(key)}
                  >
                    {key.icon ? (
                      <img src={key.icon} className="icon" />
                    ) : (
                      key.key
                    )}
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
