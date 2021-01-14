import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

// import Board from './board/Board';
// import ActionBar from './ActionBar/ActionBar';
import Home from './Home/Home';
import Board from './board/Board';
// import Footer from './Footer/Footer';
// import Header from './Header/Header';

function App() {
  const [player, setPlayer] = useState({ pseudo: '', position: '' });

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home player={player} setPlayer={setPlayer} />}
        />
        <Route
          exact
          path="/board"
          render={() => <Board player={player} setPlayer={setPlayer} />}
        />
        {/* <div className="App">
      <div className="body">
        <Board />
        <ActionBar />
      </div>
    </div> */}
      </Switch>
    </Router>
  );
}

export default App;
