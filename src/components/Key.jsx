import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const Key = ({ keyVal, bigKey, disabled }) => {
  const { enterKey, selectedKey, deleteKey } = useStateContext();
  const handleKey = () => {
    if (keyVal === "Enter") {
      enterKey();
    } else if (keyVal === "Delete") {
      deleteKey();
    } else {
      selectedKey(keyVal);
    }
  };

  return (
    <div
      className="key"
      id={bigKey ? "big" : disabled ? "disabled" : ""}
      onClick={handleKey}
    >
      {keyVal}
    </div>
  );
};

export default Key;
