import React from 'react';
import Application from './Application';
import Mood from './Mood';
import './ActionBar.scss';
import Contact from './Contact';

const ActionBar = () => {
  return (
    <div className="actionBar">
      <Mood />
      <Application />
      <Contact />
    </div>
  );
};

export default ActionBar;
