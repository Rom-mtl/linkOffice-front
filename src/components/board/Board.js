import React, { useEffect, useState } from 'react';
import './Board.css';

const Board = () => {
  const [object, setObject] = useState('');
  useEffect(() => {
    const grid = document.querySelector('.wrapper');
    grid.addEventListener('click', (e) => {
      console.log(e.target);
      if (e.target.innerHTML.length < 30) {
        setObject(e.target.innerHTML);
      }
    });
  });

  return (
    <div className="boardContainer">
      <div className="inputContainer">
        <input type="text" id="cursorInfo" value={object} />
        <textarea
          type="text"
          id="objectInfo"
          value="Le canapé est un espace de repos, c'est peut être le moment de souffler"
        />
      </div>
      <div className="wrapper">
        <div className="one">Rangement 1</div>
        <div className="two">Bureau 1</div>
        <div className="three">Bureau 3</div>
        <div className="four">Bureau 2</div>
        <div className="five">Bureau 5</div>
        <div className="six">Bureau 4</div>
        <div className="seven">Rangement 2</div>
        <div className="height">Plante 1</div>
        <div className="nine" />
        <div className="ten">Bureau du Chef</div>
        <div className="eleven" />
        <div className="douze">Cartons</div>
        <div className="treize">PaperBoard</div>
        <div className="conf">Réunion</div>
        <div className="cafe">Machine a Café</div>
        <div className="canap">Le Canapé</div>
        <div className="tapis">Le tapis</div>
        <div className="planteDeux">Plante 2</div>
      </div>
    </div>
  );
};

export default Board;
