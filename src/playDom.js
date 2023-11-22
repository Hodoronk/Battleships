import { shipPanel, container, mainBoard} from "./shipPlacementDom"
import { playerTurn } from "./playGame"
import { body } from "./nameInputDom"
import { usr } from "."


const pcBoard = document.createElement('div')
const playerName = document.createElement('h2')
const pcName = document.createElement('h2')
playerName.textContent = 'Friendly waters'
pcName.textContent = 'Enemy Waters'
pcName.setAttribute('id', 'pc-name')
playerName.setAttribute('id', 'player-name')


pcBoard.setAttribute('id', 'main-board')
let boardSize = 10
for(let i = 0; i < boardSize* boardSize; i++) {
    const col = Math.floor(i / boardSize)
    const row = i % boardSize
    const square = document.createElement('div')
    square.classList.add('square')
    square.setAttribute('data-info', [col, row]);
    const dataInfo = [col, row]
    pcBoard.appendChild(square)
    square.addEventListener('click', () => {
        if(playerTurn(dataInfo) === 'Ship hit'){
            square.classList.add('hit')
        }else{
            square.classList.add('miss')
        }
    })
}



export const removeElements = () => {
    container.removeChild(shipPanel)
    mainBoard.classList.add('invisible')
}

export const loading = () => {

    title.classList.remove('shrink')
    title.classList.add('enlarge')
    const versusText = document.createElement('h2')
    container.appendChild(versusText)
    versusText.textContent = `${usr} vs Computer`
    versusText.setAttribute('id', 'vs-text')
    setTimeout(() => {
        versusText.classList.add('fade-in')
    }, 0);

    setTimeout(() => {
        title.classList.remove('enlarge')
        title.classList.add('shrink')
        setTimeout(() => {
            versusText.classList.add('fade-out')
        }, 0)
        
    }, 2000)
}

export const populateBoards = () => {
    setTimeout(() => {

        mainBoard.classList.remove('invisible')
        mainBoard.classList.add('playMode')
        container.appendChild(pcBoard)
        body.appendChild(pcName)
        body.appendChild(playerName)
    },3000)
}

