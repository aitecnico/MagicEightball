import React, { useState } from "react";

const NumberGame = (props) => {

    // (2) Javascript code get a random number
    const genRandom = () => Math.floor(Math.random() * 10) + 1;

    // (3) State
    const [guess, setGuess] = useState(genRandom)
    return (
        <div>

            {/* (1) See if <h1>Your Guess:</h1>   */}
            {/* (4)(state guess value ) shows in browser */}
            <h1>Your Guess: {guess} </h1>

            {/* (5) Button with onClick */}
            <button onClick={() => setGuess(genRandom())}>Generate Num</button>

        </div >
    )
}

export default NumberGame;