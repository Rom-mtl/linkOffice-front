import React, { useState } from 'react';
import produce from 'immer';
import './Board.css';

const boardStyle = {
  width: '100%',
  height: '800px',
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridAutoRows: 'auto',
  gridTemplateRows: 'repeat(14, 1fr)',
  marginBottom: '10px',
  marginTop: '11px',
  marginLeft: '11px',
  position: 'absolute',
  zIndex: '2',
};

const squareBoard = {
  border: 'none',
};

const board = [];
for (let i = 0; i < 168; i += 1) {
  board.push({ id: i, content: '', currentPlayer: false });
}
board[0].currentPlayer = true;

const Board = () => {
  const [myBoard, setmyBoard] = useState(board);
  const [playerPosition, setPlayerPosition] = useState(0);
  const [isFiltered, setIsFiltered] = useState(true);
  const [isWrite, setIsWrite] = useState(true);
  const [isOnline, setIsOnline] = useState(true);

  const handlerFilter = () => {
    setIsFiltered(!isFiltered);
  };

  const handlerWrite = () => {
    setIsWrite(!isWrite);
  };

  const handlerOnLine = () => {
    setIsOnline(!isOnline);
  };

  const changeSquareContent = (id) => {
    const nextState = produce(myBoard, (draftState) => {
      // mettre à jour current player de l'ancienne case à false
      // mettre à jour le state du player position
      // mettre à jour current player de l'id en cours
      // eslint-disable-next-line no-param-reassign
      draftState[playerPosition].currentPlayer = false;
      setPlayerPosition(id);
      // eslint-disable-next-line no-param-reassign
      draftState[id].currentPlayer = true;
    });
    setmyBoard(nextState);
  };

  return (
    <div className="board-body">
      <div style={boardStyle} className="board">
        {myBoard.map((square, index) => {
          return (
            <div
              style={squareBoard}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              onKeyPress={() => {}}
              role="button"
              tabIndex="0"
              onClick={() => {
                changeSquareContent(square.id);
              }}
            >
              {square.currentPlayer ? (
                <div className="playerPosition" />
              ) : (
                <div />
              )}
            </div>
          );
        })}
      </div>
      <div className="wrapper">
        <div className="one" />
        <div className="two" />
        <div className="three" />
        <div className="four" />
        <div className="five" />
        <div className="six" />
        <div className="seven" />
        <div className="height" />
        <div className="nine" />
        <div className="ten" />
        <div className="eleven" />
        <div className="douze" />
        <div className="treize" />
        <button
          label="text"
          className={!isWrite ? 'conf' : 'conf2'}
          type="button"
          onClick={handlerWrite}
        />
        <div className="cafe" />
        <div className="canap" />
        <div className="tapis" />
        <div className="murTop" />
        <div className="murBottom" />
        <div className="murLeft" />
        <div className="murRight" />
        <div className="cafePointer" />
        <div className="gamePointer" />
        <button
          label="text"
          className={!isFiltered ? 'planteDeux' : 'planteFane'}
          type="button"
          onClick={handlerFilter}
        />
        <button
          label="text"
          className={!isOnline ? 'thomas' : 'Thomas2'}
          type="button"
          onClick={handlerOnLine}
        />
      </div>
    </div>
  );
};

export default Board;
