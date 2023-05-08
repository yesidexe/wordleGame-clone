import React from "react";
//
import { sample } from '../../utils'
import { WORDS, PALABRAS } from '../../data'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { checkGuess } from "../../game-helpers";
//
import GuessInput from "../GuessInput/GuessInput";
//
import GuessResults from "../GuessResults.jsx/GuessResults";
import Banner from "../Banner/Banner"
import Keyboard from "../keyboard/Keyboard";


const Game = function () {
    /*Estado de las palabras que vienen del input,
    Estado de la respuesta,
    Estado del juego para ver si perdio o ganó,
    Estado de las palabras del teclado*/     
    const [guesses, setGuesses] = React.useState([])    
    const [answer, setAnswer] = React.useState(()=>sample(PALABRAS))    
    const [gameStatus, setGameStatus] = React.useState('')
    const [keyWords, setKeyWords] = React.useState('')

    /*método que actualiza el estado de guesses*/
    const handleSubmitGuess = (inputGuess) => {
        const newGuesses = [...guesses, inputGuess]
        setGuesses(newGuesses)
        validatedGameStatus(inputGuess, guesses.length + 1)
    }

    /*método que me valida los resultados de la partida*/
    const validatedGameStatus = (inputGuess, numInputGuess) => {
        if (inputGuess === answer) {
            setGameStatus('won')
        } else if (numInputGuess === NUM_OF_GUESSES_ALLOWED) {
            setGameStatus('lost')
        }
    }

    /*método que actualiza keyWords*/
    const handleKeyWord = (keyPress)=>{
        setKeyWords(keyPress)
    }

    /* Método que resetea el juego (todos los estados)*/
    const handleResetGame = ()=>{
        setGuesses([])
        setGameStatus('')
        setAnswer(()=>sample(PALABRAS))
    }

    const validatedGuesses = guesses.map((guess) =>
    checkGuess(guess, answer)
    );


    return (
        <>
            <GuessResults validatedGuesses={validatedGuesses} guesses={guesses} answer={answer} />

            <GuessInput
                handleSubmitGuess={handleSubmitGuess}
                gameStatus={gameStatus} />

            <Keyboard 
                handleKeyWord={handleKeyWord} validatedGuesses={validatedGuesses}></Keyboard>

            <Banner
                handleResetGame={handleResetGame}
                numGuesses={guesses.length}
                gameStatus={gameStatus}
                answer={answer}/>            
        </>
    );

};

export default Game;
