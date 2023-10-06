import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  if (guess !== "") {
    const values = checkGuess(guess, answer);

    return (
      <>
        {guess.split("").map((letter, index) => (
          <span className={`cell ${values[index].status}`} key={index}>
            {letter}
          </span>
        ))}
      </>
    );
  } else {
    return (
      <>
        {range(5).map((i) => (
          <span className="cell" key={i}>
            {" "}
          </span>
        ))}
      </>
    );
  }
}

export default Guess;
