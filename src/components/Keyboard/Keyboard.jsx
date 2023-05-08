import React from "react"

const keyRows = [
    ["Q", "W", "E", "R", "T", "Y", "U","I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"]
]

const getStatus = (validatedGuesses) => {
    const ojbStatus = {}

    validatedGuesses.forEach((guess) => {
        guess.forEach(({ letter, status }) => {
            ojbStatus[letter] = status;
        })        
    })
    
    return ojbStatus;
}

const Keyboard = function ({ handleKeyWord, validatedGuesses }) {
    /*esta es la funcion del onclick del boton
    que lo que hace es mandarle la info de que tecla se tecleo*/
    const handlerKeyPress = (keyButton) => {
        handleKeyWord(keyButton)
    }

    let statusByLetter = getStatus(validatedGuesses)

    return (
        <div className="keyboard-wrapper">
            {
                keyRows.map((keyRow, index) => {
                    const id = `${keyRow}-${index}`
                    return (
                        <div className="keyboard-row" key={id} >
                            {
                                keyRow.map((keyButton, index) => {
                                    const id = `${keyButton}-${index}`                                    
                                    const className = `keyboard-button ${statusByLetter[keyButton]}`

                                    return (
                                        <button
                                            className={className}
                                            key={id}
                                            onClick={() => handlerKeyPress(keyButton)}>
                                            {keyButton}
                                        </button>
                                    )

                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Keyboard;