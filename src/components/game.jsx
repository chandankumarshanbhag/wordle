import "../assets/game.scss";

export default function Game({ game: { boardState, wordLength } }) {
  return (
    <div className="game-container">
      <table className="game-table">
        <tbody>
          {boardState.map((row, index) => {
            return (
              <tr className="game-row" key={index}>
                {Array(wordLength)
                  .fill(0)
                  .map((_, index) => {
                    return <td className="game-cell grey" key={index}>{row[index]}</td>;
                  })}
              </tr>
            );
          })}
          
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
