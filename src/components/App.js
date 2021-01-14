import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Board from './board/Board';
// import ActionBar from './ActionBar/ActionBar';
import Home from './Home/Home';
import Board from './board/Board';
// import Footer from './Footer/Footer';
// import Header from './Header/Header';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/board" component={Board} />
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
