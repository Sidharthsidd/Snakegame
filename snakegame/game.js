import { update as updateSnake, draw as drawSnake, snakeSpeed, snakeInterSection, getSnakeHead } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outSideGrid } from './grid.js';

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');
let gameOver = false;

function main(currentTime) {
    if (gameOver) {
        if (confirm("You lost. Press OK to restart.")) {
            window.location = "/";
        }
        return;
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / snakeSpeed) return;

    lastRenderTime = currentTime;

    update();
    draw();
}

function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML = '';  // Clear the board before drawing
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
    gameOver = outSideGrid(getSnakeHead()) || snakeInterSection();
}

window.requestAnimationFrame(main);
