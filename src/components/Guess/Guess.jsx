import React from "react";
import { range } from '../../utils'
const Guess = function ({ guessRow }) {
    /*en si no son las columnas, son las cajitas de row
    solo que no supe que nombre ponerle, ahí le dejo columns
    porque igual son columnas pero de una sola filaxddd o sea cajitas*/
    const columns = range(5)

    return (
        <>
            <p className="guess">
                {columns.map((column, index) => {
                    const id = `id-${index}`;
                    const status = guessRow ? guessRow[column].status : undefined;
                    const letter = guessRow ? guessRow[column].letter : undefined;
                    const className = (status !== undefined
                                        ? `cell ${status}`
                                        : `cell`)

                    return (                        
                        <span 
                            key={id}
                            letter={letter}
                            status={status}
                            className={className} >
                            {letter}
                        </span>
                    );
                })}
            </p>         
        </>
    );
};

export default Guess;
