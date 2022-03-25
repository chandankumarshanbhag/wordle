import clsx from "clsx";
import { For } from "solid-js";
import "../assets/game.scss";

export default function Game(props) {
  return (
    <div className="game-container">
      <table className="game-table">
        <tbody>
          <For each={props.game.boardState}>
            {(row, index) => {
              return (
                <tr className="game-row">
                  <For each={Array(props.game.wordLength).fill(0)}>
                    {(_, letterIndex) => {
                      return (
                        <td
                          className={clsx({
                            "game-cell": true,
                            ["green"]: props.game.evaluations?.[index()]?.[letterIndex()] == "CORRECT",
                            ["grey"]: props.game.evaluations?.[index()]?.[letterIndex()] == "ABSENT",
                            ["yellow"]: props.game.evaluations?.[index()]?.[letterIndex()] == "PRESENT",
                          })}
                        >
                          {row[letterIndex()]}
                        </td>
                      );
                    }}
                  </For>
                </tr>
              );
            }}
          </For>
        </tbody>
      </table>

      {/* <div className='game-actions'>
        <button className='button is-rounded is-dark m-2'>H</button>
        <button className='button is-rounded is-dark m-2'>H</button>
        <button className='button is-rounded is-dark m-2'>H</button>
      </div> */}
    </div>
  );
}
