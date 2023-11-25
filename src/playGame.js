import { squareArr } from "./playDom"
import { playerGameboard } from "./shipPlacementDom"
import { pcGameboard } from "./pcPlace"


export const playGame = async () => {
    do{
        await playerTurn()
        await computerTurn()

    }while(pcGameboard.allSank() === false || playerGameboard.allSank() === false)

}
const playerTurn = () => {
    return new Promise((resolve) => {
        const squareClickHandler = (event) => {
            const clickedSquare = event.target
            const data = clickedSquare.getAttribute('data-info')
            const dataInfo = data.split(',').map(Number);

            if(pcGameboard.receiveAttack(dataInfo[0], dataInfo[1]) === 'hit') {
                clickedSquare.classList.add('hit')

            }else if(pcGameboard.receiveAttack(dataInfo[0], dataInfo[1]) === 'sunk'){
                clickedSquare.classList.add('hit')
            

            }else if(pcGameboard.receiveAttack(dataInfo[0], dataInfo[1]) === 'Miss!') {
                clickedSquare.classList.add('miss')
            }

            const indexOf = squareArr.indexOf(clickedSquare)
            squareArr.forEach((square) => {
                square.removeEventListener('click', squareClickHandler)
            })
            squareArr.splice(indexOf, 1)
            resolve()
        }
        
        squareArr.forEach((square) => {
            square.addEventListener('click', squareClickHandler)
        })

    })
}
const computerTurn = async() => {
    console.log('mock')
}