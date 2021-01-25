import { useState } from "react";
import "./App.css";

const App = () => {
  const [startingNumber, setStartingNumber] = useState("");
  const [endingNumber, setEndingNumber] = useState("");
  const [randomNumber, setRandomNumber] = useState("");
  const [usedNumbers, setUsedNumbers] = useState([]);

  const clearInput = (event) => {
    return (event.target.value = "");
  };

  const handleStartingChange = (event) => {
    setStartingNumber(parseInt(event.target.value));
  };

  const handleEndingChange = (event) => {
    setEndingNumber(parseInt(event.target.value));
  };

  const generateNumber = (event) => {
    event.preventDefault();
    const min = startingNumber;
    const max = endingNumber + 1;
    let num = Math.floor(Math.random() * (max - min) + min);

    if (usedNumbers.length >= max - min) {
      alert("you've used all the numbers in that range!");
    } else {
      while (usedNumbers.includes(num)) {
        num = Math.floor(Math.random() * (max - min) + min);
      }
    }

    setUsedNumbers([...usedNumbers, num]);
    setRandomNumber(num);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p>NUMBER GENERATOR (No repeats)</p>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>
          From{" "}
          <input
            onChange={handleStartingChange}
            onClick={clearInput}
            value={startingNumber}
            placeholder="enter number"
          />{" "}
          to{" "}
          <input
            onChange={handleEndingChange}
            onClick={clearInput}
            value={endingNumber}
            placeholder="enter number"
          />{" "}
        </p>

        <button
          style={{ height: 30, borderRadius: 5, marginLeft: 15 }}
          onClick={generateNumber}
          type="submit"
        >
          Generate!
        </button>
      </form>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 75,
          width: 75,
          backgroundColor: "pink",
          borderRadius: 5,
          marginTop: 100,
        }}
      >
        {randomNumber && (
          <p style={{ fontWeight: "bold", fontSize: 24 }}>{randomNumber}</p>
        )}
      </div>
    </div>
  );
};

export default App;
