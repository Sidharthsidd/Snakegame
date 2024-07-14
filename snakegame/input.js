let inputDirection ={x:0,y:0}


window.addEventListener('keydown',e=>{
    switch(e.key){
        case 'Arrowup':
            inputDirection={x:0,y:-1}
    }
})
export function getInputDirection(){
    return inpurDirection
}