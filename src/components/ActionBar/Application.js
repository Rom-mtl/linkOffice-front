import React from 'react';
import './Application.scss';
import discord from '../../images/discord.png';
import games from '../../images/games.png';
import spotify from '../../images/spotify.png';
import steam from '../../images/steam.png';
import meet from '../../images/meet.png';
import more from '../../images/more.png';

const Application = () => {
  return (
    <div className="applications">
      <h2>Vos applications</h2>
      <div className="applications-grid">
        <button type="button" onClick={() => {}}>
          <img className="games" src={games} alt="discord" />
        </button>
        <button type="button" onClick={() => {}}>
          <img className="spotify" src={spotify} alt="discord" />
        </button>
        <button type="button" onClick={() => {}}>
          <img className="steam" src={steam} alt="discord" />
        </button>
        <button type="button" onClick={() => {}}>
          <img className="meet" src={meet} alt="discord" />
        </button>
        <button type="button" onClick={() => {}}>
          <img className="discord" src={discord} alt="discord" />
        </button>
        <button type="button" onClick={() => {}}>
          <img className="more" src={more} alt="discord" />
        </button>
      </div>
    </div>
  );
};

export default Application;
