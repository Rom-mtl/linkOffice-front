/* eslint-disable dot-notation */
/* eslint-disable no-nested-ternary */

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import produce from 'immer';
import ActionBar from '../ActionBar/ActionBar';
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
  gridTemplateRows: 'repeat(14, 57px)',
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
board[137].currentPlayer = true;

// INSTALLATION DE LA MODALE MATERIAL UI
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 300,
    backgroundColor: 'lightYellow',
    border: '3px solid white',
    boxShadow: theme.shadows[1],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Board = (props) => {
  const [myBoard, setmyBoard] = useState(board);
  const [playerPosition, setPlayerPosition] = useState(137);
  const [isFiltered, setIsFiltered] = useState(true);
  const [isWrite, setIsWrite] = useState(true);
  const [isOnline, setIsOnline] = useState(true);
  const [onlinePlayers, setOnlinePlayers] = useState([]);
  const { player } = props;
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [interractOtherPlayer, setInterractOtherPlayer] = useState(false);

  // setInterval(() => {
  // }, 5000);

  useEffect(() => {
    setInterval(() => {
      axios.get('https://witty-walrus-16.loca.lt/users/').then((res) => {
        setOnlinePlayers(res.data);
      });
    }, 1000);
  }, []);

  useEffect(() => {
    const boardUpdated = myBoard.map((square) => {
      for (let i = 0; i < onlinePlayers.length; i += 1) {
        if (
          parseInt(onlinePlayers[i].position, 10) === parseInt(square.id, 10)
        ) {
          return { ...square, otherPlayer: true };
        }
      }
      return { ...square, otherPlayer: false };
    });
    setmyBoard(boardUpdated);
  }, [playerPosition, onlinePlayers]);

  useEffect(() => {
    axios
      .put(`https://witty-walrus-16.loca.lt/users/${player.pseudo}/edit`, {
        position: { playerPosition },
      })
      .then((res) => {
        setOnlinePlayers(res.data);
      });
  }, [playerPosition]);

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
    if (myBoard[id].otherPlayer === true) {
      setInterractOtherPlayer(true);
    } else {
      setInterractOtherPlayer(false);
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
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log(open);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Poste de Travail</h2>
      <p id="simple-modal-description">
        Vous saisissez un post-it et y ecrivez :
      </p>
      <textarea />
      <button type="submit">Ecrire</button>
      <button type="button" onClick={handleClose}>
        X
      </button>
    </div>
  );

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
                  {interractOtherPlayer ? (
                    <p className="bulle"> Yo Romain</p>
                  ) : (
                    <p className="pseudo">{player.pseudo}</p>
                  )}
                  {/* <p className="pseudo">{player.pseudo}</p> */}
                  <img
                    className="playperPositionImg"
                    src={myPlayer}
                    alt="player"
                  />
                </div>
              ) : square.otherPlayer ? (
                <div className="playerPosition">
                  <p className="pseudo">Romain</p>

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
        <div
          type="button"
          className="four"
          onKeyPress={() => {}}
          role="button"
          tabIndex="0"
          label="text"
          onClick={handleOpen}
        >
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </div>
        <div className="five" />
        <div style={{ zIndex: '4000', display: 'none' }}>
          <button type="button" onClick={handleOpen}>
            Open Modal
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </div>
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
      <ActionBar player={player} onlinePlayers={onlinePlayers} />
    </div>
  );
};

export default Board;
