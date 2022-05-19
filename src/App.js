import { useEffect } from "react";
import "./App.css";
import data from "./data";

const App = () => {

  const character_1 = [0, 1, 2, 20, 40, 60, 80, 81, 82];
  const character_2 = [4, 7, 24, 27, 44, 45, 46, 47, 64, 67, 84, 87];
  const character_3 = [9, 10, 11, 12, 29, 32, 49, 52, 69, 72, 89, 90, 91, 92];
  const character_4 = [14, 18, 34, 35, 38, 54, 56, 58, 74, 77, 78, 94, 98];

  const target_word = [
    ...character_1,
    ...character_2,
    ...character_3,
    ...character_4,
  ];

  useEffect(() => {
    if (document.getElementsByClassName("game")) {
      console.log(document.getElementsByClassName("game"));
    }
  }, []);

  const BoardWord = () => {
    return [...Array(100)].map((_, index) => {
      if (target_word.includes(index)) {

        return <div className="c" key={index}>{index}</div>;
      }

      if (index % 2) {
        return <div className="b" key={index}>{index}</div>;
      } else {
        return <div className="a" key={index}>{index}</div>;
      }
    });
  };

  return (
    <div className="App">
      <h1>Hidden Word</h1>
      <div className="game">
        <BoardWord />
      </div>
    </div>
  );
};

export default App;
