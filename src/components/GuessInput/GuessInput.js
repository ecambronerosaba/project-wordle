import React from "react";

function GuessInput({ guess, setGuess, handleSubmit, disabled }) {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
