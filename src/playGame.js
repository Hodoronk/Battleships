import { pcGameboard } from "./pcPlace"
import { playerGameboard } from "./shipPlacementDom"


export const playGame = () => {
    do{
        playerTurn()
        computerTurn()
    }while(!pcGameboard.allSank || !playerGameboard.allSank)
}

const playerTurn = () => {

}

computerTurn = () => {
    
}