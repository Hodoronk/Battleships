import {nameEnter, nameInput, nameSubmit, reNameEnter, rmNameEnter } from "./dom";
import { displayBoard } from "./displayBoard";

let userName = ''
nameEnter()


const handleNameSubmit = () => {
    userName = nameInput.value;
    nameInput.value = '';
    console.log(userName);
    rmNameEnter()
    displayBoard()

}
nameSubmit.addEventListener('click', handleNameSubmit)
