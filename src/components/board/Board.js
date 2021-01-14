/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import produce from 'immer';
import './Board.css';
import myPlayer from '../../images/bob.png';
import otherPlayer1 from '../../images/otherplayer1.png';
import otherPlayer2 from '../../images/otherplayer2.png';
import otherPlayer3 from '../../images/otherplayer3.png';

const axios = require('axios');

const avatarArray = [otherPlayer1, otherPlayer2, otherPlayer3];

const boardStyle = {
  width: '100%',
  height: '800px',
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 112px)',
  gridAutoRows: '200px',
  gridTemplateRows: 'repeat(14, 52px)',
  marginBottom: '10px',
  position: 'absolute',
  zIndex: '2',
};

const squareBoard = {
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
};

const board = [];
for (let i = 0; i < 168; i += 1) {
  board.push({
    id: i,
    name: '',
    content: '',
    currentPlayer: false,
    otherPlayer: false,
  });
}
board[0].currentPlayer = true;
board[39].otherPlayer = true;

const Board = (props) => {
  const [myBoard, setmyBoard] = useState(board);
  const [playerPosition, setPlayerPosition] = useState(0);
  const [isFiltered, setIsFiltered] = useState(true);
  const [isWrite, setIsWrite] = useState(true);
  const [isOnline, setIsOnline] = useState(true);
  const { player } = props;

  setInterval(() => {
    axios.get('https://chilly-mayfly-63.loca.lt/users/').then((res) => {
      console.log(res);
    });
  }, 5000);

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

      axios
        .post(`https://chilly-mayfly-63.loca.lt/users/${player.pseudo}/edit`, {
          name: '',
        })
        .then((res) => {
          console.log(res);
          // poster le numéro de sa case
        });
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
                <div className="playerPosition">
                  <p>{player.pseudo}</p>
                  <img
                    className="playperPositionImg"
                    src={myPlayer}
                    alt="player"
                  />
                </div>
              ) : square.otherPlayer ? (
                <div className="playerPosition">
                  <img
                    className="playperPositionImg"
                    src={avatarArray[1]}
                    alt="player"
                  />
                </div>
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
        <div
          onKeyPress={() => {}}
          role="button"
          tabIndex="0"
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
        <div
          onKeyPress={() => {}}
          role="button"
          tabIndex="0"
          label="text"
          className={!isFiltered ? 'planteDeux' : 'planteFane'}
          type="button"
          onClick={handlerFilter}
        />
        <div
          onKeyPress={() => {}}
          role="button"
          tabIndex="0"
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
