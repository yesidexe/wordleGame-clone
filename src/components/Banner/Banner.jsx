const Banner = function ({handleResetGame, numGuesses, gameStatus, answer}) {

    const className = gameStatus === 'won' 
                        ? `banner happy` 
                        : (gameStatus === 'lost'
                        ? `banner sad`
                        : undefined);
        
    return (
        <div className={className} >
            
            {                
                gameStatus ==='won' ? 
                <p>
                    <span>
                        <strong>Congratulations!</strong> Got it in
                        <strong> {numGuesses === 1 ? `1 guess` : `${numGuesses} guesses`}</strong>.
                    </span>                    
                    <button onClick={handleResetGame}>Reset</button>
                </p> : (gameStatus === 'lost'
                    ?<p>                      <span>
                            Lo siento, la respuesta correcta es <strong>{answer}</strong>.
                        </span>                        
                        <button onClick={handleResetGame}>Empezar de nuevo!</button>
                    </p>
                    : undefined)                
            }            
        </div >
    );
}

export default Banner;