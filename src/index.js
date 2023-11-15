import { rmNameEnter, nameEnter, nameInput, nameSubmit } from "./nameInputDom";


import { displayBoard } from "./displayBoard";

let userName = ''
nameEnter()


const handleNameSubmit = () => {
    nameSubmit.removeEventListener('click', handleNameSubmit) // to prevent duplication of page on double click
    userName = nameInput.value;
    nameInput.value = '';
    rmNameEnter()
    displayBoard()

}

// Drags and Drops
nameSubmit.addEventListener('click', handleNameSubmit)

