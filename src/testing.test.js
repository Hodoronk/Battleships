const { Ship, shipOne } = require('./ship');
const {Gameboard} = require('./gameboard')


const sunkShip = new Ship(4,4)
const unharmedShip = new Ship(4)
const unharmedShipTwo = new Ship(4)


it('Hitting the ship', () => {
    expect(shipOne.hit()).toBe('ship hit')
})

it('Check sunk', () => {
    expect(shipOne.isSunk()).toBe(false)
})

it(`Sunk ship isSunk()`, () => {
    expect(sunkShip.isSunk()).toBe(true)
})

it('Hitting ship four times', () => {
    expect(unharmedShip.isSunk()).toBe(false)
    unharmedShip.hit()
    unharmedShip.hit()
    unharmedShip.hit()
    unharmedShip.hit()
    expect(unharmedShip.isSunk()).toBe(true)
})

it('Counts the number of hits', () => {
    expect(unharmedShipTwo.isSunk()).toBe(false)
    unharmedShipTwo.hit()
    expect(unharmedShipTwo.hits).toBe(1)
    unharmedShipTwo.hit()
    expect(unharmedShipTwo.hits).toBe(2)
    unharmedShipTwo.hit()
    expect(unharmedShipTwo.hits).toBe(3)
    unharmedShipTwo.hit()
    expect(unharmedShipTwo.hits).toBe(4)
    expect(unharmedShipTwo.isSunk()).toBe(true)
})


// Gameboard Testing

const testGameboard = new Gameboard()

it('Check coordinates of xPlaced + checks occupied', () => {
    expect(testGameboard.xPlace(5, 2, 2)).toStrictEqual([[2,2], [3,2], [4,2], [5,2], [6,2]])
    expect(testGameboard.getOccupied()).toStrictEqual([[2,2], [3,2], [4,2], [5,2], [6,2]])
})

it('Check if ship can be placed on occupied', () => {
    expect(testGameboard.getOccupied)
})

it.skip('Check if coords overlap with already placed ship', () => {

})