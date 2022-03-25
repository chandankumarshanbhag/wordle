import { createSignal } from "solid-js";
import Game from "./components/game";
import Layout from "./layout";

let totalRows = 6;
let wordLength = 5;

function App() {
  const [game, setGame] = createSignal({
    currentRow: 0,
    totalRows,
    wordLength,
    boardState: Array(wordLength).fill(""),
  },{equals: false});

  function keydown(key) {
    setGame((game) => {
      switch (key.type) {
        case "SPECIALKEY":
          break;
        default:
          if (game.boardState[game.currentRow]?.length <= 5) {
            game.boardState[game.currentRow] =
              (game.boardState[game.currentRow] || "") + key.key;
          }
      }
      console.log(game)
      return {...game};
    });
  }

  console.log(game());
  return (
    <Layout keydown={keydown}>
      <Game game={game()} wordLength={wordLength} />
    </Layout>
  );
}

export default App;
