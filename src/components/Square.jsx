export default function Square({ value  , onSquareClick }) {
    return (
      <button
        className="square"
        style={{ 
          color: value === 'X' ? "#42a7c1" : "#d55236"
        }}
        onClick={onSquareClick}
      >
        {value}
      </button>
    );
}