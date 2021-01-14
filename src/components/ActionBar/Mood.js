import React, { useState } from 'react';
import './Mood.scss';
import Picker from 'emoji-picker-react';

const Mood = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div className="mood">
      <h2>Humeur du jour ?</h2>
      <div className="mood-params">
        <div className="status-smiley">
          <div className="status">
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
              <p>Pas dispo</p>
            </div>
          </div>
          <div className="smiley">
            {chosenEmoji ? (
              <span>You chose: {chosenEmoji.emoji}</span>
            ) : (
              <span>No emoji Chosen</span>
            )}
            <Picker onEmojiClick={onEmojiClick} />
          </div>
        </div>
        <div>
          <textarea
            className="message"
            placeholder="Entrez votre message ici..."
          />
        </div>
      </div>
    </div>
  );
};

export default Mood;
