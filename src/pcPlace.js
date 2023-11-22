import { Gameboard } from "./gameboard";
const ships = [5, 4, 3, 3, 1]
export const pcGameboard = new Gameboard()

const allCoords = () => {
    let array = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            array.push([i, j]);
        }
    }
    return array;
};
const randomOrientation = () =>{
    const orientation = Math.round(Math.random())
    return orientation
}
export const randomIndex = (len) => {
    const randomIndex = Math.floor(Math.random() * len);
    return randomIndex
}
const removeOccupiedCoords = (coords, occupied) => {

    const filteredCoords = coords.filter(coord => !occupied.some(o => JSON.stringify(o) === JSON.stringify(coord)));
    return filteredCoords;
};

const  hasCommonElements = (array1, array2) => {
    return array1.some(item => array2.some(innerArray => JSON.stringify(innerArray) === JSON.stringify(item)));
};




let coords = allCoords();
    export const pcPlace = () => {
    
        for (let i = 0; i < ships.length ; i++) {

            let orientation = randomOrientation();
            let rIndex;
            let mockShip
            if (orientation === 0) {
                do {
                    rIndex = randomIndex(99 - pcGameboard.occupied.length);
                    mockShip = pcGameboard.mockX(ships[i], coords[rIndex][0], coords[rIndex][1])


                } while (
                    (ships[i] + coords[rIndex][0] > 10) ||
                    (ships[i] + coords[rIndex][1] > 10) 

                    
                );


                pcGameboard.xPlace(ships[i], coords[rIndex][0], coords[rIndex][1]);


            } else if (orientation === 1) {
                do {
                    rIndex = randomIndex(99 - pcGameboard.occupied.length);
                    mockShip = pcGameboard.mockY(ships[i], coords[rIndex][0], coords[rIndex][1])

                } while (
                    (ships[i] + coords[rIndex][1] > 10) ||
                    (ships[i] + coords[rIndex][0] > 10) 
                    );
     
                pcGameboard.yPlace(ships[i], coords[rIndex][0], coords[rIndex][1]);
            }
            
            coords = removeOccupiedCoords(coords, pcGameboard.occupied);

        }
        console.log(pcGameboard.occupied)
        console.log(coords)
    };
