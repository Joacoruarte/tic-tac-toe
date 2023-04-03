import calculateWinner from "../utils/calculateWinner";
import Square from "./Square";
import { TbReload } from 'react-icons/tb'

export default function Board({ xIsNext, squares, onPlay, onReset }) {
  
    const handleClick = (index) => {
      if(squares[index] || calculateWinner(squares)) return;
      const newSquares = [...squares];
  
      if(xIsNext) {
        newSquares[index] = "X";
      }else {
        newSquares[index] = "O";
      }
      onPlay(newSquares)
    }
  
    const winner = calculateWinner(squares);
    let status;
  
    if(squares.find(s=> s === null) === undefined){
      status = "Tie"
    }else if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }
  
  
    const board = [];
  
    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        const squareIndex = i * 3 + j;
        row.push(
          <Square 
            key={squareIndex}
            value={squares[squareIndex]} 
            onSquareClick={() => handleClick(squareIndex)}
          />
        );
      }
      board.push(
        <div key={i} className="board-row">
          {row}
        </div>
      );
    }
  
    return (
      <>
          <div className="status"><h3>{status}</h3></div>
          <div className="board">
            {board}
          </div>
          <div className="reload_div">
            {(status.includes('Winner') || status.includes('Tie')) &&  <TbReload onClick={onReset} className="reload_icon" />}
          </div>
      </>
    );
}