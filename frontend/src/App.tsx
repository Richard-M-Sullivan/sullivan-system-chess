import chessRizzLogo from './assets/chess-rizz-logo.svg';
import './App.css';
import Nav from './Components/Nav';

function App() {
  return (
    <>
      <Nav />
      <img src={chessRizzLogo}></img>
      <h1>Tournament Creation Software</h1>
      <p>This is a react application</p>
      <div>
        <button>Click Me</button>
      </div>
    </>
  );
}

export default App;
