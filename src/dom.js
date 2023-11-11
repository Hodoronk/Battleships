

// Enter name DOM elements
const body = document.querySelector('body')
const title = document.querySelector('#title')
const nameDiv = document.createElement('div')
const namePrompt = document.createElement('p')
export const nameInput = document.createElement('input')
export const nameSubmit = document.createElement('button')

// Board DOM elements

const container = document.createElement('div')
const mainBoard = document.createElement('div')
const shipPanel = document.createElement('div')
const instruction = document.createElement('h2')
const numericCoords = document.createElement('div')
const letterCoords = document.createElement('div')

export const initBoard = () => {
    body.appendChild(container)
    container.appendChild(mainBoard)
    shipPanel.appendChild(instruction)
    instruction.textContent = 'Drag & Drop your ships on the board'
    mainBoard.setAttribute('id', 'main-board')
    container.appendChild(shipPanel)
    container.appendChild(numericCoords)
    container.appendChild(letterCoords)
    numericCoords.setAttribute('id', 'numeric-coords')
    letterCoords.setAttribute('id', 'letter-coords')
    shipPanel.setAttribute('id', 'ship-panel')
    container.setAttribute('id', 'board-container')

    for(let i = 0; i <100; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        mainBoard.appendChild(square)
    }
    for(let i = 0; i < 10; i++) {
        const numCoord = document.createElement('div')
        numCoord.textContent = i
        numCoord.classList.add('num-grid')
        numericCoords.appendChild(numCoord)
        
        const letCoord = document.createElement('div')
        let letter = String.fromCharCode(65 + i);
        letCoord.textContent = letter;
        letCoord.classList.add('let-grid')
        letterCoords.appendChild(letCoord)
    }

}



export const nameEnter = () => {
    body.appendChild(nameDiv)
    nameDiv.appendChild(namePrompt)
    nameDiv.appendChild(nameInput)
    nameDiv.appendChild(nameSubmit)
    namePrompt.textContent = 'Enter your name'
    nameSubmit.textContent = 'Battle!'

    nameDiv.setAttribute('id', 'name-container')
    namePrompt.setAttribute('id', 'name-prompt')
    nameInput.setAttribute('id', 'name-input')
    nameSubmit.setAttribute('id', 'name-submit')
}

export const rmNameEnter = () => {
     nameDiv.classList.add('fade-out')
    title.classList.add('shrink')
    setTimeout(function(){
         body.removeChild(nameDiv)
    }, 1000)
}



