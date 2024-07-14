import {inputDirection} from './input.js'

export const snakeSpeed = 1;
const snakeBody = [{ x: 11, y: 11 },{ x: 11, y: 11 },{ x: 12, y: 11 }];

export function update() {
    for (let i=snakeBody.length-2;i>=0;i--){
        snakeBody[i+1]={...snakeBody[i]};  //three ... will not keep previous data                
    }
    snakeBody[0].x+=inputDirection.x;
    snakeBody[0].y+=inputDirection.y;

}

export function draw(gameBoard) {
    gameBoard.innerHTML = ''; // Clear previous snake parts
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;       //if we xchange thiis to x this will move to down 
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    });
}

