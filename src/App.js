import "./App.css";
import { target_word, target_number, list_number } from "./hiddendata";

const App = () => {
  const BoardWord = () => {
    return list_number.map((item, index) => {
      if (target_word.includes(index)) {
        if (target_number.includes(index)) {
        }
        return (
          <div
            className={target_number.includes(item) ? "a c" : "a a"}
            key={item}
          >
            {item}
          </div>
        );
      }

      return (
        <div
          className={target_number.includes(item) ? "b c" : "b b"}
          key={item}
        >
          {item}
        </div>
      );

      // else {
      //   return <div className={target_number.includes(item) ? "a d" : "a a"} key={item}>{item}</div>;
      // }
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
