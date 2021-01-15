import React, { useState } from 'react';
import './ActionBar.scss';
import { FcPlus } from 'react-icons/fc';
import Picker from 'emoji-picker-react';
import discord from '../../images/discord.png';
import games from '../../images/games.png';
import spotify from '../../images/spotify.png';
import steam from '../../images/steam.png';
import meet from '../../images/meet.png';
import more from '../../images/more.png';

const ActionBar = (props) => {
  const { player, onlinePlayers } = props;

  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div className="actionBar">
      <div className="onLine">
        <div className="hello">
          <p className="auBoulot">
            Au boulot, <br />
            <span className="idName">{player.pseudo}</span>
          </p>
        </div>
        <div className="connexion-status">
          <p className="greenCircle" />
          <p>Disponible</p>
        </div>
        <div className="connexion-status">
          <p className="orangeCircle" />
          <p>Occupé</p>
        </div>
        <div className="connexion-status">
          <p className="redCircle" />
          <p>Offline</p>
        </div>
      </div>
      <div className="humeur">
        <h2 className="appTitle">Vos applications</h2>
        <div className="applications-grid">
          <button
            type="button"
            onClick={() => {
              console.log('coucou');
            }}
          >
            <img className="games" src={games} alt="discord" />
          </button>
          <button
            type="button"
            onClick={() => {
              console.log('coucou');
            }}
          >
            <img className="spotify" src={spotify} alt="discord" />
          </button>
          <button
            type="button"
            onClick={() => {
              console.log('coucou');
            }}
          >
            <img className="steam" src={steam} alt="discord" />
          </button>
          <button
            type="button"
            onClick={() => {
              console.log('coucou');
            }}
          >
            <img className="meet" src={meet} alt="discord" />
          </button>
          <button
            type="button"
            onClick={() => {
              console.log('coucou');
            }}
          >
            <img className="discord" src={discord} alt="discord" />
          </button>
          <button
            type="button"
            onClick={() => {
              console.log('coucou');
            }}
          >
            <img className="more" src={more} alt="discord" />
          </button>
        </div>
      </div>
      <div className="application">
        <div className="smiley">
          {chosenEmoji ? (
            <div className="spanEmoji">YOU ARE {chosenEmoji.emoji}</div>
          ) : (
            <div className="spanEmoji">HOW ARE YOU?</div>
          )}
        </div>
        <Picker
          onEmojiClick={onEmojiClick}
          disableSkinTonePicker
          disableSearchBar
        />
        <div className="containerArea">
          <textarea
            className="message"
            placeholder="Entrez votre message ici..."
          />
          <button type="button" className="buttonSend">
            Envoyer
          </button>
        </div>
      </div>
      <div className="collegue">
        <div className="contacts-list">
          <h2 className="titleCollegue">Collègues</h2>

          {onlinePlayers.map((coworker) => {
            return (
              <div className="contact">
                <FcPlus className="contact-picker" />
                <div className="contact-status" />
                <div className="contact-name">{coworker.pseudo} </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
