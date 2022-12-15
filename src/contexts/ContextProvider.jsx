import { createContext, useContext, useState, useEffect } from "react";
import { boardDefault, generatedWordSet } from "../helper/word";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ currRow: 0, currCol: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledKey, setDisabledKey] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  const [correctWord, setCorrectWord] = useState("");

  useEffect(() => {
    generatedWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.randomWord);
      console.log(words.randomWord);
    });
  }, []);

  // selectedKey
  const selectedKey = (keyVal) => {
    if (currAttempt.currCol > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.currRow][currAttempt.currCol] = keyVal;
    setCurrAttempt({ ...currAttempt, currCol: currAttempt.currCol + 1 });
    setBoard(newBoard);
  };
  // enterKey
  const enterKey = () => {
    if (currAttempt.currCol !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.currRow][i].toLocaleLowerCase();
    }
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ currRow: currAttempt.currRow + 1, currCol: 0 });
    } else {
      alert("word not Founded");
    }
    if (currWord === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
    if (currAttempt.currRow === 5 && wordSet.has(currWord.toLowerCase())) {
      setGameOver({ gameOver: true, guessedWord: false });
    }
  };
  // deleteKey
  const deleteKey = () => {
    if (currAttempt.currAttempt === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.currRow][currAttempt.currCol - 1] = "";
    setCurrAttempt({ ...currAttempt, currCol: currAttempt.currCol - 1 });
    setBoard(newBoard);
  };

  return (
    <StateContext.Provider
      value={{
        board,
        setBoard,
        currAttempt,
        setCurrAttempt,
        selectedKey,
        enterKey,
        deleteKey,
        correctWord,
        disabledKey,
        setDisabledKey,
        gameOver,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  return useContext(StateContext);
};
