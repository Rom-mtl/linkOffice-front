import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = (props) => {
  const { player, setPlayer } = props;

  const changePseudo = (e) => {
    setPlayer({ ...player, pseudo: e.target.value });
  };

  const addPlayer = () => {
    axios
      .post(`https://grumpy-mule-40.loca.lt/users/add/${player.pseudo}`)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="backgroundHome">
      <div className="backTitle">
        <div className="gif" />
        <div className="logo" />
        <h2 className="titleHome">Le bureau à la maison !</h2>
        <input
          type="text"
          id="inputEnter"
          value={player.pseudo}
          onChange={changePseudo}
        />
        <Link exact to="/board">
          <button
            type="button"
            label="Prenom"
            className="buttonEnter"
            onClick={addPlayer}
          >
            BADGER
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
