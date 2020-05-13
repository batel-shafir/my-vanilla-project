import './css/style.css'
import './css/style.scss';

let circle = document.querySelector('.circle');
let moveBy = 10;

console.log(circle);
function myfunc() {
    console.log('hi');
}

document.getElementById("click").addEventListener("click", myfunc);

window.addEventListener('load', ()=> {
    circle.style.position = 'absolute';
    circle.style.left = 0;
    circle.style.top = 0;
})

window.addEventListener('keyup', (e)=> {
    switch(e.key){
        case "ArrowLeft":
            circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
            break;
        case "ArrowRight":
            circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
            break;
        case "ArrowDown":
            circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
            break;
        case "ArrowUp":
            circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
            break;
    }
})