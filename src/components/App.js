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
  const [pseudo, setPseudo] = useState('');

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home pseudo={pseudo} setPseudo={setPseudo} />}
        />
        <Route
          exact
          path="/board"
          render={() => <Board pseudo={pseudo} setPseudo={setPseudo} />}
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
