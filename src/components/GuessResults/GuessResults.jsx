import React from "react";
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import Guess from "../Guess";

const GuessResults = function ({validatedGuesses}) {

    const rows = range(NUM_OF_GUESSES_ALLOWED)

    return (
        <div className="guess-results">
            {
                rows.map((row, index) => {
                    const id = `row-${index}`
                    return <Guess key={id} guessRow={validatedGuesses[row]}/>                    
                })
            }
        </div>
    );
};

export default GuessResults;
