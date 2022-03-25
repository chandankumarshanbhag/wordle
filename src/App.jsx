import { createSignal } from "solid-js";
import Game from "./components/game";
import Layout from "./layout";
import dictonary from "./words.json";

let totalRows = 6;
let wordLength = 5;

function App() {
  const [game, setGame] = createSignal(
    {
      currentRow: 0,
      totalRows,
      wordLength,
      boardState: Array(wordLength).fill(""),
      evaluations: Array(wordLength).fill([]),
      solution: "GAMER",
    },
    { equals: false }
  );

  function isAValidWord(word) {
    return dictonary.includes(word.toLowerCase());
  }

  function keydown(key) {
    setGame((game) => {
      switch (key.type) {
        case "SPECIALKEY":
          if (key.key === "BACKSPACE") {
            game.boardState[game.currentRow] = game.boardState[
              game.currentRow
            ].slice(0, -1);
          } else if (
            key.key === "ENTER" &&
            game.boardState[game.currentRow].length === wordLength
          ) {
            if (isAValidWord(game.boardState[game.currentRow])) {
              game.evaluations[game.currentRow] = game.boardState[
                game.currentRow
              ]
                .split("")
                .map((letter, index) => {
                  return game.solution.includes(letter) ? (
                    game.solution[index] === letter ? "CORRECT":"PRESENT"
                  ) : "ABSENT";
                });
              game.currentRow++;
            } else {
              alert("Not a valid word");
            }
          }
          break;
        default:
          if (game.boardState[game.currentRow]?.length < 5) {
            game.boardState[game.currentRow] =
              (game.boardState[game.currentRow] || "") + key.key;
          }
      }
      console.log(game);
      return { ...game };
    });
  }

  console.log(game());
  return (
    <Layout game={game()} keydown={keydown}>
      <Game game={game()} wordLength={wordLength} />
    </Layout>
  );
}

export default App;
