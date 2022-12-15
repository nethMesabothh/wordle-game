import React, { useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";

const Letter = ({ row, col }) => {
  const { board, correctWord, currAttempt, setDisabledKey } = useStateContext();
  const letter = board[row][col];

  const correct = correctWord.toUpperCase()[col] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currAttempt.currRow > row &&
    (correct ? "correct" : almost ? "almost" : "wrong");

  useEffect(() => {
    if (!correct && letter !== "" && !almost) {
      setDisabledKey((prev) => [...prev, letter]);
    }
  }, [currAttempt.currRow]);

  return (
    <div className="letter" id={letterState.toString()}>
      {letter}
    </div>
  );
};

export default Letter;
