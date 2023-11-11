class Ship {
    constructor(length, coords = [], hits = 0, sunk = false) {
        this.length = length;
        this.hits = hits
        this.sunk = sunk
        this.coords = coords
    }
    hit(){
        this.hits++
        if(this.length === this.hits) {
            this.sunk = true
        }
        return 'ship hit'
    }

    isSunk(){
        if(this.length === this.hits) {
            return true
        }
        return false
    }
}

// created Ship with a length of five
const shipOne = new Ship(5)


module.exports = {
    shipOne,
    Ship
}

