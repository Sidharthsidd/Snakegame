let inputDirection = { x: 0, y: 0 };

// window.addEventListener('keydown',e=>{
//     switch(e.key){
//         case 'Arrowup':
//             inputDirection={x:0,y:-1}
//             break;
//         case 'Arrowdown':
//             inputDirection={x:0,y:1}
//             break;
//         case 'Arrowleft':
//             inputDirection={x:-1,y:0}
//             break;
//         case 'ArrowRight':
//             inputDirection={x:1,y:0}
//             break;
//     }
// })
export function getInputDirection() {
  return inputDirection;
}
