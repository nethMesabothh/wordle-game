import React, { useContext } from "react";
import { useStateContext } from "../contexts/ContextProvider";

function GameOver() {
  const { gameOver, correctWord, currAttempt } = useStateContext();
  return (
    <div className="gameOver">
      <h2>
        {gameOver.guessedWord
          ? "You guessed the word corrected!"
          : "You failed to guess the word"}
      </h2>
      <h1>The correct word is : {correctWord.toUpperCase()} </h1>

      {gameOver.guessedWord ? (
        <h2>
          you guess the word correct in {currAttempt.currRow}{" "}
          {currAttempt.currRow > 1 ? "attempts" : "attempt"}
        </h2>
      ) : (
        "Please try again!"
      )}
    </div>
  );
}

export default GameOver;
