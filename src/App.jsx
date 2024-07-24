import { useState } from "react";
import "./App.css";
function App() {
  const [hungary, setHungary] = useState(50);
  const [clean, setClean] = useState(50);
  const [happy, setHappy] = useState(50);

  const handleHung = () => {
    setHungary((prev) => {
      if (prev < 100) {
        return prev + 10;
      }
      return 100;
    });
    setHappy((prev) => prev + 10);
  };
  const handleClean = () => {
    setClean(100);
  };
  const handlePlay = () => {
    setHappy((prev) => prev + 10);
    setHungary((prev) => {
      if (prev > 0) {
        return prev - 10;
      }
      return 0;
    });
    setClean((prev) => {
      if (prev > 0) {
        return prev - 10;
      }
      return 0;
    });
  };
  const getStatus = () => {
    if (hungary <= 0) {
      return "Not Hungary";
    } else if (hungary > 80) {
      return "Very Hungary";
    } else if (clean === 0) {
      return "Dirty";
    } else {
      return "Neutral";
    }
  };
  return (
    <>
      <div className="container">
        <h2>Status : {getStatus()}</h2>
        <span>Hungary Level : {hungary} </span>
        <span>Clean Level : {clean} </span>
        <span>Happiness Level : {happy} </span>
        <div className="buttons">
          <button disabled={hungary === 0 || clean === 0} onClick={handlePlay}>
            Play with Dog
          </button>
          <button disabled={hungary === 100} onClick={handleHung}>
            Feed Pet
          </button>
          <button disabled={clean === 100} onClick={handleClean}>
            Clean Pet
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
