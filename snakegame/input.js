let inputDirection = { x: 0, y: 0 };
let startX, startY, endX, endY;
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            inputDirection = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            inputDirection = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            inputDirection = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            inputDirection = { x: 1, y: 0 };
            break;
    }
});


window.addEventListener('touchstart', e => {
  const touch = e.touches[0];
  startX = touch.clientX;
  startY = touch.clientY;
});

window.addEventListener('touchend', e => {
  const touch = e.changedTouches[0];
  endX = touch.clientX;
  endY = touch.clientY;
  handleSwipe();
});

function handleSwipe() {
  const diffX = endX - startX;
  const diffY = endY - startY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
      // Horizontal swipe
      if (diffX > 0) {
          inputDirection = { x: 1, y: 0 }; // Swipe right
      } else {
          inputDirection = { x: -1, y: 0 }; // Swipe left
      }
  } else {
      // Vertical swipe
      if (diffY > 0) {
          inputDirection = { x: 0, y: 1 }; // Swipe down
      } else {
          inputDirection = { x: 0, y: -1 }; // Swipe up
      }
  }
}
export function getInputDirection() {
  return inputDirection;
}
