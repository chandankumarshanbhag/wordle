import { createSignal } from "solid-js";
import Game from "./components/game";
import Toast from "./components/toast";
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
      boardState: Array(totalRows).fill(""),
      evaluations: Array(wordLength).fill([]),
      solution:
        dictonary[Math.floor(Math.random() * dictonary.length)].toUpperCase(),
    },
    { equals: false }
  );
  const [toast, setToast] = createSignal(null);

  function isAValidWord(word) {
    return dictonary.includes(word.toLowerCase());
  }

  function keydown(key) {
    setGame((game) => {
      console.log(game)
      
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
                  return game.solution.includes(letter)
                    ? game.solution[index] === letter
                      ? "CORRECT"
                      : "PRESENT"
                    : "ABSENT";
                });

              if (game.solution == game.boardState[game.currentRow]) {
                showToast("Correct!");
                game.currentRow == 1000;
              }else{
                if (game.totalRows == game.currentRow + 1) {
                  showToast(game.solution);
                  game.currentRow = 1000;
                } else {
                  game.currentRow++;
                }

              }
            } else {
              // alert("Not a valid word");
              showToast("Not a valid word");
            }
          }
          break;
        default:
          if (game.boardState[game.currentRow]?.length < 5) {
            game.boardState[game.currentRow] =
              (game.boardState[game.currentRow] || "") + key.key;
          }
      }
      return { ...game };
    });
  }

  function showToast(message) {
    setToast(message);
    setTimeout(() => {
      hideToast();
    }, 2000);
  }

  function hideToast() {
    setToast(null);
  }

  return (
    <Layout game={game()} keydown={keydown}>
      <Game game={game()} wordLength={wordLength} />
      <Toast message={toast()} />
    </Layout>
  );
}

export default App;
