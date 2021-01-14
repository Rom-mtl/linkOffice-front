import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="backgroundHome">
      <div className="logo" />
      <h2 className="titleHome">Le bureau à la maison !</h2>
      <input type="text" id="inputEnter" />
      <Link exact to="/board">
        <button type="button" label="Prenom" className="buttonEnter">
          BADGER
        </button>
      </Link>
    </div>
  );
};

export default Home;
