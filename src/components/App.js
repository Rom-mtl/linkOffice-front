import ActionBar from './ActionBar/ActionBar';
import './App.scss';
import Board from './board/Board';
// import Footer from './Footer/Footer';
// import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <div className="body">
        <Board />
        <ActionBar />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
