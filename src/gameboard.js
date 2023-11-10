
class Gameboard{
    constructor(placement, occupied = []){
        this.placement = placement
        this.occupied = occupied
    }
    // This will be used on a button
    xPlace(shipLength, cX, cY){
        if(!this.occupied.includes([cX, cY])) {

            const shipCoords = []
            shipCoords.push([cX, cY])
            for(let i = 1; i < shipLength; i++) {
                shipCoords.push([cX + i, cY])
            }
            shipCoords.forEach(coord => {
                this.occupied.push(coord)
            })
            return shipCoords
        } else {
            return 'Invalid placement'
        }
    }


    receiveAttack(x,y){

    }

    getOccupied(){
        return this.occupied
    }
}


module.exports = {
    Gameboard
}