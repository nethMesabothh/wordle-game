import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { useStateContext } from "./contexts/ContextProvider";
import GameOver from "./components/gameOver";

function App() {
  const { gameOver } = useStateContext();

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <div className="game">
        <Board />
        {gameOver.gameOver ? <GameOver /> : <Keyboard />}
      </div>
    </div>
  );
}

export default App;
