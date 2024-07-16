import { update as updateSnake, draw as drawSnake, snakeSpeed } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
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
}

function draw() {
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

window.requestAnimationFrame(main);
