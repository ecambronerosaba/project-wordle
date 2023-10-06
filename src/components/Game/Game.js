import React from "react";

import { sample } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import ListGuesses from "../ListGuesses/ListGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  function handleSubmit() {
    if (guesses.length < NUM_OF_GUESSES_ALLOWED) {
      var nextGuesses = [...guesses, { guess: guess, id: Math.random() }];
      setGuess("");
      setGuesses(nextGuesses);
      console.info({ guess });
      if (guess === answer) {
        setBanner("happy");
      }
    }
    if (guesses.length === NUM_OF_GUESSES_ALLOWED - 1 && guess !== answer) {
      setBanner("sad");
    }
  }
  const [guess, setGuess] = React.useState("");
  const [guesses, setGuesses] = React.useState([]);
  const [banner, setBanner] = React.useState("none");

  return (
    <>
      <ListGuesses guesses={guesses} answer={answer} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        handleSubmit={handleSubmit}
        disabled={banner !== "none"}
      />
      {banner === "happy" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{guesses.length} guesses</strong>.
          </p>
        </div>
      )}
      {banner === "sad" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
