import clsx from "clsx";
import "../assets/keyboard.scss";
import { createEffect, createSignal } from "solid-js";
import keysGroup from "../keys_group";

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
