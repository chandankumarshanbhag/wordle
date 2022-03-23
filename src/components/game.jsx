import '../assets/game.scss';

export default function Game() {
  return (
    <div className="game-container">
      <table className="game-table">
        <tbody>
          <tr className="game-row">
            <td className="game-cell grey">G</td>
            <td className="game-cell yellow">A</td>
            <td className="game-cell grey">M</td>
            <td className="game-cell green">E</td>
            <td className="game-cell grey">R</td>
          </tr>
          <tr className="game-row">
            <td className="game-cell">H</td>
            <td className="game-cell">E</td>
            <td className="game-cell">L</td>
            <td className="game-cell">L</td>
            <td className="game-cell">O</td>
          </tr>
          <tr className="game-row">
            <td className="game-cell"></td>
            <td className="game-cell"></td>
            <td className="game-cell"></td>
            <td className="game-cell"></td>
            <td className="game-cell"></td>
          </tr>
          <tr className="game-row">
            <td className="game-cell"></td>
            <td className="game-cell"></td>
            <td className="game-cell"></td>
            <td className="game-cell"></td>
            <td className="game-cell"></td>
          </tr>
          <tr className="game-row">
            <td className="game-cell"></td>
            <td className="game-cell"></td>
            <td className="game-cell"></td>
            <td className="game-cell"></td>
            <td className="game-cell"></td>
          </tr>
          <tr className="game-row">
            <td className="game-cell"></td>
            <td className="game-cell"></td>
            <td className="game-cell"></td>
            <td className="game-cell"></td>
            <td className="game-cell"></td>
          </tr>
        </tbody>
      </table>

      <div className='game-actions'>
        <button className='button is-rounded is-dark m-2'>H</button>
        <button className='button is-rounded is-dark m-2'>H</button>
        <button className='button is-rounded is-dark m-2'>H</button>
      </div>
    </div>
  );
}
