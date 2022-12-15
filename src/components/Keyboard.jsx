import React, { useCallback, useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import Key from "./Key";

const Keyboard = () => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const { enterKey, selectedKey, deleteKey, disabledKey } = useStateContext();

  const handleKeyboard = useCallback((e) => {
    if (e.key === "Enter") {
      enterKey();
    } else if (e.key === "Backspace") {
      deleteKey();
    } else {
      keys1.forEach((key) => {
        if (e.key.toLowerCase() === key.toLowerCase()) {
          selectedKey(key);
        }
      });
      keys2.forEach((key) => {
        if (e.key.toLowerCase() === key.toLowerCase()) {
          selectedKey(key);
        }
      });
      keys3.forEach((key) => {
        if (e.key.toLowerCase() === key.toLowerCase()) {
          selectedKey(key);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {keys1.map((key, index) => {
          return (
            <Key
              key={index}
              keyVal={key}
              disabled={disabledKey.includes(key)}
            />
          );
        })}
      </div>
      <div className="line2">
        {keys2.map((key, index) => {
          return (
            <Key
              key={index}
              keyVal={key}
              disabled={disabledKey.includes(key)}
            />
          );
        })}
      </div>
      <div className="line3">
        <Key keyVal="Enter" bigKey />
        {keys3.map((key, index) => {
          return (
            <Key
              key={index}
              keyVal={key}
              disabled={disabledKey.includes(key)}
            />
          );
        })}
        <Key keyVal="Delete" bigKey />
      </div>
    </div>
  );
};

export default Keyboard;
