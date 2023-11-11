const { Ship, shipOne } = require('./ship');
const {Gameboard} = require('./gameboard')


const sunkShip = new Ship(4)
const unharmedShip = new Ship(4)
const unharmedShipTwo = new Ship(4)


it('Hitting the ship', () => {
    expect(shipOne.hit()).toBe('ship hit')
})

it('Check sunk', () => {
    expect(shipOne.isSunk()).toBe(false)
})

it(`Sunk ship isSunk()`, () => {
    sunkShip.hit()
    sunkShip.hit()
    sunkShip.hit()
    sunkShip.hit()
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

it('Test getOccupied', () => {
    expect(testGameboard.getOccupied()).toStrictEqual([[2,2], [3,2], [4,2], [5,2], [6,2]])
})

it('Test if ship can be placed on occupied', () => {
    expect(testGameboard.xPlace(5,2,2)).toBe('Invalid placement')
})

it('Check if ship gets hit', () => {
    expect(testGameboard.receiveAttack(3,2)).toBe(1)
})

it('Check hit miss', () => {
    expect(testGameboard.receiveAttack(8,8)).toStrictEqual([[8,8]])
})
it('Hit ship multuple times and check if sunk', () => { //test fails because all allSunk becomes true once this sinks
    testGameboard.receiveAttack(2,2)
    testGameboard.receiveAttack(4,2)
    testGameboard.receiveAttack(5,2)
    expect(testGameboard.receiveAttack(6,2)).toBe('Ship sank')
})

it('Place new ship, hit it length - 1', () => {
    testGameboard.xPlace(4,5,3)
    testGameboard.receiveAttack(5,3)
    testGameboard.receiveAttack(6,3)
    expect(testGameboard.receiveAttack(7,3)).toBe(3)
})

it('Sink all ships, check allSank()', () => {
    expect(testGameboard.receiveAttack(8,3)).toBe('ALL SHIPS SANK')
})

it('check allSank', () => {
    expect(testGameboard.allSank()).toBe(true)
    testGameboard.xPlace(1,9,9)
    expect(testGameboard.allSank()).toBe(false)
})