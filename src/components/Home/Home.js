import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = (props) => {
  const { pseudo, setPseudo } = props;

  const changePseudo = (e) => {
    setPseudo(e.target.value);
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
          value={pseudo}
          onChange={changePseudo}
        />
        <Link exact to="/board">
          <button type="button" label="Prenom" className="buttonEnter">
            BADGER
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
