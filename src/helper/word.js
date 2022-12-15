import Word from "./word-bank.txt";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generatedWordSet = async () => {
  const response = await fetch(Word);
  const result = await response.text();
  const wordArr = result.split("\r\n");
  let randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];
  let wordSet = new Set(wordArr);

  return { wordSet, randomWord };
};
