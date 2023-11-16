import { body } from "./nameInputDom";
import { Gameboard } from "./gameboard";

const playerGameboard = new Gameboard()
let unavailable = []


let rotation = 0; // 0 = horizontal 1 = vertical
// Board DOM elements
export const shipPanel = document.createElement('div')
export const container = document.createElement('div')
export const mainBoard = document.createElement('div')
const rotateBtn = document.createElement('button')
const shipArea = document.createElement('div')
rotateBtn.textContent = 'Rotate ship'
const instruction = document.createElement('h2')

// The ships
export const carrier = document.createElement('div')
export const battleship = document.createElement('div')
export const destroyer = document.createElement('div')
export const submarine = document.createElement('div')
export const patrolBoat = document.createElement('div')
const shipsArray = [battleship, destroyer, submarine, patrolBoat]

// Make ships draggable
carrier.setAttribute('draggable', 'true');
battleship.setAttribute('draggable', 'true');
destroyer.setAttribute('draggable', 'true');
submarine.setAttribute('draggable', 'true');
patrolBoat.setAttribute('draggable', 'true');

//Play button
export const playBtn = document.createElement('button')
playBtn.textContent = 'Play'



export const initBoard = () => {
    let selected;
    body.appendChild(container)
    container.appendChild(mainBoard)
    container.appendChild(shipPanel)
    shipPanel.appendChild(instruction)
    shipPanel.appendChild(rotateBtn)
    shipPanel.appendChild(shipArea)
    
    instruction.textContent = 'Drag & Drop your carrier'
    mainBoard.setAttribute('id', 'main-board')
    shipPanel.setAttribute('id', 'ship-panel')
    container.setAttribute('id', 'board-container')
    shipArea.setAttribute('id', 'ship-area')
    rotateBtn.setAttribute('id', 'rotate-btn')
    carrier.setAttribute('class', ' visible')
    shipArea.appendChild(carrier)
    
    carrier.setAttribute('id', 'carrier')
    battleship.setAttribute('id', 'battleship')
    destroyer.setAttribute('id', 'destroyer')
    submarine.setAttribute('id', 'submarine')
    patrolBoat.setAttribute('id', 'patrol-boat')
    

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
    let shipNumber = 0;
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
        square.addEventListener('drop', () => {

            const shipLength = getShipLength(shipNumber)
            const coords = getCoords(rotation, dataInfo, shipLength)
            if(shipLength + dataInfo[1]  > 10 && rotation === 0) {     
                square.classList.remove('hover')                                 // prevent x-axis out of bounds placement
                return
            } else if(shipLength + dataInfo[0] > 10 && rotation === 1) {
                square.classList.remove('hover')                                   // prevent y-axis out of bounds placement
                return
            }
            if (coords.some(coord => unavailable.some(unavailCoord => JSON.stringify(unavailCoord) === JSON.stringify(coord)))){
                square.classList.remove('hover')                                    // prevent ship placement overlap
                return
            }
            if(rotation === 0) {
                playerGameboard.xPlace(shipLength, row, col)
                console.log(playerGameboard.occupied)
            }else{
                playerGameboard.yPlace(shipLength, row, col)
                console.log(playerGameboard.occupied)
            }

            coords.forEach((element) => {                                            // pushing coords into array that collects taken coords on board
                unavailable.push(element)
            })

            square.classList.remove('hover')
            square.appendChild(selected)
            selected.classList.add('dragged')

            if(rotation === 1) {
                selected.classList.add(`vertical-${selected.id}`)
            }

            if(shipNumber < 4) {

                shipArea.appendChild(shipsArray[shipNumber])
                instruction.textContent = `Drag and drop your ${shipsArray[shipNumber].id} `
                shipNumber++;
                rotation = 0;

            } else {
                remover()
            }
        })
    }
    
    rotateBtn.addEventListener('click', () => {
        const shipName = shipArea.firstChild.id
        const isVertical = shipArea.firstChild.classList.contains(`vertical-${shipName}`);
        if(isVertical){
            shipArea.firstChild.classList.remove(`vertical-${shipName}`)

            rotation = 0
        }else{
            shipArea.firstChild.classList.add(`vertical-${shipName}`)
            rotation = 1
        }
        
    })
}





// initBoard utilities
function dragEnter (e) {
    e.preventDefault()
    this.className += ' hover'
}
function dragLeave (e) {
    e.preventDefault()
    this.className = ' square'
}
function dragOver (e) {
    e.preventDefault();
}
const getShipLength = (shipNumber) => {
    if(shipNumber === 0) {
        return 5
    } else if(shipNumber === 1) {
        return 4
    } else if(shipNumber === 2 || shipNumber === 3) {
        return 3
    } else {
        return  1
    }
}
const getCoords = (rotation, dataInfo, shipLength) => {
    const coords = []
    if(rotation === 0) {                // Horizontal
        for(let i = 0; i < shipLength; i++) {
            coords.push([dataInfo[0], dataInfo[1] + i])
        }
        return coords;
    } else{                             // Vertical
        for(let i = 0; i < shipLength; i++) {
            coords.push([dataInfo[0] + i, dataInfo[1]])
        }
        return coords;
    }
}

const remover = () => {
    shipPanel.removeChild(shipArea)
    shipPanel.removeChild(rotateBtn)
    shipPanel.removeChild(instruction)
    shipPanel.appendChild(playBtn)
}

