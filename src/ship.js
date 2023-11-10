class Ship {
    constructor(length, hits = 0, sunk = false) {
        this.length = length;
        this.hits = hits;
        this.sunk = sunk;
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

