const square = document.getElementById('square')
document.addEventListener('keydown', oneClick)
let x = 200
let y = 200
let delta = 10

function oneClick(event) {
    // console.log(event.keyCode)
    // if(event.keyCode === 38){
    //     alert('нажалась кнопка вверх')
    // }

    
    switch (event.keyCode) {
        case 38: console.log('Up'); moveUp(); break;
        case 37: console.log('Left'); moveLeft(); break;
        case 39: console.log('Right'); moveRight(); break;
        case 40: console.log('Down'); moveDown(); break;
        case 32: square.style.backgroundColor = 'red'; break;
    }

    square.style.top = x + 'px'
    square.style.left = y + 'px'
    
}

const moveUp = () => { x -= delta} 
const moveLeft = () => { y -= delta} 
const moveRight = () => { y += delta} 
const moveDown = () => { x += delta} 

square.addEventListener('mouseout', 
    () => {square.style.backgroundColor = 'blue'}
)
square.addEventListener('mouseover', 
    () => {square.style.backgroundColor = 'pink'}
)