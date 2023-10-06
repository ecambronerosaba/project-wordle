import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function ListGuesses({ guesses, answer }) {
  return (
    <div className="guess-results">
      {guesses.map(({ guess, id }) => (
        <p className="guess" key={id}>
          <Guess guess={guess} answer={answer} />
        </p>
      ))}
      {range(guesses.length, NUM_OF_GUESSES_ALLOWED).map((i) => (
        <p className="guess" key={i}>
          <Guess guess={""} answer={answer} />
        </p>
      ))}
    </div>
  );
}

export default ListGuesses;
