const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const scoreUserDisplay = document.getElementById('score-user')
const scoreComputerDisplay = document.getElementById('score-computer')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let scoreUser = 0
let scoreComputer = 0 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    console.log(randomNumber)

    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    
    else if(randomNumber === 2){
        computerChoice = 'paper'
    }
    
    else {
        computerChoice = 'scissor'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === userChoice){
        result = 'DRAW'
        resultDisplay.innerHTML = result
        scoreUserDisplay.innerHTML = scoreUser
        scoreComputerDisplay.innerHTML = scoreComputer
    }

    else if(userChoice === 'rock'){
        if (computerChoice === 'scissor'){
            result = 'USER +1'
            scoreUser += 1
            resultDisplay.innerHTML = result
            scoreUserDisplay.innerHTML = scoreUser
            scoreComputerDisplay.innerHTML = scoreComputer
            
        } 
        else if (computerChoice === 'paper'){
            result = 'COM +1'
            scoreComputer += 1
            resultDisplay.innerHTML = result
            scoreUserDisplay.innerHTML = scoreUser
            scoreComputerDisplay.innerHTML = scoreComputer
            
        }
    }

    else if(userChoice === 'paper'){
        if (computerChoice === 'rock'){
            result = 'USER +1'
            scoreUser += 1
            resultDisplay.innerHTML = result
            scoreUserDisplay.innerHTML = scoreUser
            scoreComputerDisplay.innerHTML = scoreComputer
            
        }
        else if (computerChoice === 'scissor'){
            result = 'COM +1'
            scoreComputer += 1
            resultDisplay.innerHTML = result
            scoreUserDisplay.innerHTML = scoreUser
            scoreComputerDisplay.innerHTML = scoreComputer
            
        }
    }

    else if (userChoice === 'scissor'){
        if (computerChoice === 'paper'){
            result = 'USER +1'
            scoreUser += 1
            resultDisplay.innerHTML = result
            scoreUserDisplay.innerHTML = scoreUser
            scoreComputerDisplay.innerHTML = scoreComputer
            
        }
        else if (computerChoice === 'rock'){
            result = 'COM +1'
            scoreComputer += 1
            resultDisplay.innerHTML = result
            scoreUserDisplay.innerHTML = scoreUser
            scoreComputerDisplay.innerHTML = scoreComputer
            
        }
    }

    if (scoreUser === 3 && scoreUser > scoreComputer) {
        result = 'YOU WIN!'
        resultDisplay.innerHTML = result
        scoreUserDisplay.innerHTML = scoreUser
        scoreComputerDisplay.innerHTML = scoreComputer
        scoreComputer = 0
        scoreUser = 0
    }

    else if(scoreComputer == 3 && scoreComputer > scoreUser){
        result = 'YOU LOSE!'
        resultDisplay.innerHTML = result
        scoreUserDisplay.innerHTML = scoreUser
        scoreComputerDisplay.innerHTML = scoreComputer
        scoreComputer = 0
        scoreUser = 0
    }
    
    //resultDisplay.innerHTML = result
}