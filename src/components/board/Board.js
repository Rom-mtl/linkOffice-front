/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import './Board.css';

const Board = () => {
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
  return (
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
  );
};

export default Board;
