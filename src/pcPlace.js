import { Gameboard } from "./gameboard";
const ships = [5, 4, 3, 3, 1]
const pcGameboard = new Gameboard()

const allCoords = () => {
    let array = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            array.push([i, j]);
        }
    }
    return array;
};

let coords = allCoords()


const randomOrientation = () =>{
    const orientation = Math.round(Math.random())
    return orientation
}

export const randomIndex = (len) => {
    const randomIndex = Math.floor(Math.random() * len);
    return randomIndex
}

const removeOccupiedCoords = (coords, occupied) => {

    const filteredCoords = coords.filter(coord => !occupied.includes(coord));
    return filteredCoords;
};


    export const pcPlace = () => {
        const coords = allCoords();
    
        for (let i = 0; i < ships.length ; i++) {
            let orientation = randomOrientation();
            let rIndex;
            console.log(orientation)
            if (orientation === 0) {
                do {
                    rIndex = randomIndex(100);
                } while (ships[i] + coords[rIndex][0] > 10);
    
                pcGameboard.xPlace(ships[i], coords[rIndex][0], coords[rIndex][1]);
            } else if (orientation === 1) {
                do {
                    rIndex = randomIndex(100);
                } while (ships[i] + coords[rIndex][1] > 10);
    
                pcGameboard.yPlace(ships[i], coords[rIndex][0], coords[rIndex][1]);
            }
    
            removeOccupiedCoords(coords, pcGameboard.occupied);
        }
        console.log(pcGameboard.occupied);
    };
