export const body = document.querySelector('body')
const title = document.querySelector('#title')
const nameDiv = document.createElement('div')
const namePrompt = document.createElement('p')
export const nameInput = document.createElement('input')
export const nameSubmit = document.createElement('button')


export const nameEnter = () => {
    body.appendChild(nameDiv)
    nameDiv.appendChild(namePrompt)
    nameDiv.appendChild(nameInput)
    nameDiv.appendChild(nameSubmit)
    namePrompt.textContent = 'Enter your name'
    nameSubmit.textContent = 'Battle!'

    nameDiv.setAttribute('id', 'name-container')
    namePrompt.setAttribute('id', 'name-prompt')
    nameInput.setAttribute('id', 'name-input')
    nameSubmit.setAttribute('id', 'name-submit')
}

export const rmNameEnter = () => {
     nameDiv.classList.add('fade-out')
    title.classList.add('shrink')
    setTimeout(function(){
         body.removeChild(nameDiv)
    }, 1000)
    
}