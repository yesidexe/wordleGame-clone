import React from "react";
const GuessInput = function ({ handleSubmitGuess, gameStatus}) {
    const [inputGuess, setInputGuess] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSubmitGuess(inputGuess);
        setInputGuess('')
    }

    const handleChange = (e)=>{
        setInputGuess(e.target.value)
    }

    return (
        <form 
            className="guess-input-wrapper"
            onSubmit={handleSubmit}>
            {
                <input
                    required
                    maxLength={5}
                    minLength={5}
                    id="guess-input"
                    type="text"
                    title="Solo 5 letras"
                    pattern="[\p{L}ñ]{5}"
                    value={inputGuess}
                        disabled={gameStatus}    
                        className={`${gameStatus ? 'input-disable' : undefined}`}
                    onChange={handleChange} />

            }
        </form>
    );
};

export default GuessInput;

