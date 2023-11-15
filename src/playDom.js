import { shipPanel, container, mainBoard} from "./shipPlacementDom"
import { title } from "./nameInputDom"
import { userName } from "."


export const removeElements = () => {
    container.removeChild(shipPanel)
    mainBoard.classList.add('invisible')
}

export const loading = () => {
    title.classList.remove('shrink')
    title.classList.add('enlarge')
    const versusText = document.createElement('h2')
    container.appendChild(versusText)
    versusText.textContent = `${userName} vs Computer`
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
    },3000)
}

