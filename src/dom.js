import { Ship } from "./ship"
import { Gameboard } from "./gameboard"

// Enter name DOM elements

const body = document.querySelector('body')
const title = document.querySelector('#title')
const nameDiv = document.createElement('div')
const namePrompt = document.createElement('p')
export const nameInput = document.createElement('input')
export const nameSubmit = document.createElement('button')



const shipPlacementBoard = new Gameboard()
// Board DOM elements
const container = document.createElement('div')
const mainBoard = document.createElement('div')
const shipPanel = document.createElement('div')
const instruction = document.createElement('h2')

// The ships
export const carrier = document.createElement('div')
export const battleship = document.createElement('div')
export const destroyer = document.createElement('div')
export const submarine = document.createElement('div')
export const patrolBoat = document.createElement('div')

// Make ships draggable
carrier.setAttribute('draggable', 'true');
battleship.setAttribute('draggable', 'true');
destroyer.setAttribute('draggable', 'true');
submarine.setAttribute('draggable', 'true');
patrolBoat.setAttribute('draggable', 'true');


export const initBoard = () => {
    body.appendChild(container)
    container.appendChild(mainBoard)
    shipPanel.appendChild(instruction)
    instruction.textContent = 'Drag & Drop your ships on the board'
    mainBoard.setAttribute('id', 'main-board')
    container.appendChild(shipPanel)
    shipPanel.setAttribute('id', 'ship-panel')
    container.setAttribute('id', 'board-container')

    shipPanel.appendChild(carrier)       // 5 space ship
    shipPanel.appendChild(battleship)    // 4 space ship
    shipPanel.appendChild(destroyer)     // 3 space ship
    shipPanel.appendChild(submarine)     // 3 space ship
    shipPanel.appendChild(patrolBoat)    // 2 space ship

    carrier.setAttribute('id', 'carrier')
    battleship.setAttribute('id', 'battleship')
    destroyer.setAttribute('id', 'destroyer')
    submarine.setAttribute('id', 'submarine')
    patrolBoat.setAttribute('id', 'patrol-boat')

    let selected;
    carrier.addEventListener('dragstart', dragStart)
    destroyer.addEventListener('dragstart', dragStart)
    battleship.addEventListener('dragstart', dragStart)
    submarine.addEventListener('dragstart', dragStart)
    patrolBoat.addEventListener('dragstart', dragStart)
    
    carrier.addEventListener('dragend', dragEnd)
    destroyer.addEventListener('dragend', dragEnd)
    battleship.addEventListener('dragend', dragEnd)
    submarine.addEventListener('dragend', dragEnd)
    patrolBoat.addEventListener('dragend', dragEnd)
    
    function dragStart () {
        setTimeout(() => (this.className = 'invisible', 0))
        selected = event.target
    }
    function dragEnd () {
        this.classList.add('visible')
        
    }

    let boardSize = 10;
    for(let i = 0; i < boardSize* boardSize; i++) {
        const row = Math.floor(i / boardSize)
        const col = i % boardSize
        const square = document.createElement('div')
        square.classList.add('square')
        square.setAttribute('data-info', [row,col]);
        const dataInfo = [row, col]
        mainBoard.appendChild(square)
        
        // Drag into it
        square.addEventListener('dragover', dragOver)
        square.addEventListener('dragenter', dragEnter)
        square.addEventListener('dragleave', dragLeave)
        square.addEventListener('drop', dragDrop)

        function dragOver (e) {
            e.preventDefault();
        }
        function dragEnter (e) {
            e.preventDefault()
            this.className += ' hover'
        }
        function dragLeave (e) {
            e.preventDefault()
            this.className = ' square'
        }
        function dragDrop () {
            const shipName = selected.id
            const shipLength = getLength(shipName)
            if(shipLength + dataInfo[1]  > 10) {
                return
            }
            this.classList.remove('hover')
            this.appendChild(selected)
            selected.classList.add('dragged')
            console.log(dataInfo)


            
        }
    }
}




// DOM elements for name input
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

const getLength = (selected) => {
    if(selected === 'carrier') {
        const length = 5
        return length
    } else if(selected === 'battleship') {
        const length = 4
        return length
    } else if(selected === 'destroyer') {
        const length = 3
        return length
    } else if(selected === 'submarine') {
        const length = 3
        return length
    }else if(selected === 'patrol-boat') {
        const length = 1
        return length
    }
}


