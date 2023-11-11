const {Ship} = require('./ship')

class Gameboard{
    constructor( occupied = [], placedShips = [], missed = []){
        this.occupied = occupied
        this.placedShips = placedShips
        this.missed = missed
    }

    xPlace(shipLength, cX, cY){
        if(!this.occupied.some(coord => coord[0] === cX && coord[1] === cY)) {

            const newShip = new Ship(shipLength)
            newShip.coords.push([cX, cY])
            for(let i = 1; i < shipLength; i++) {
                newShip.coords.push([cX + i, cY])
            }
            this.placedShips.push(newShip)
            newShip.coords.forEach(coord => {
                this.occupied.push(coord)
            })
            return newShip.coords
        } else {
            return 'Invalid placement'
        }
    }

    allSank(){
        let num = this.placedShips.length
        let numSank = 0
        for(let i = 0; i < num; i++) {
            if(this.placedShips[i].isSunk() === true){
                numSank++
            }
        }
        if(numSank === num){
            return true
        }
        return false

    }


    receiveAttack(x,y){
        if(!this.occupied.some(coord => coord[0] === x && coord[1] === y)){
            this.missed.push([x,y])
            return this.missed
        }
        for(let i = 0; i < this.placedShips.length; i++) {
            if (this.placedShips[i].coords.some(coord => coord[0] === x && coord[1] === y)){
                this.placedShips[i].hit()
                if(this.allSank()) {
                    return 'ALL SHIPS SANK'

                } else {
                    if(this.placedShips[i].isSunk()) {
                        return 'Ship sank'
                    }else {
                        return this.placedShips[i].hits
                    }
                }
            }
        }
    }

    getOccupied(){
        return this.occupied
    }
}


module.exports = {
    Gameboard
}