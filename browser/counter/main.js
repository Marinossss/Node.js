const DEFAULT = 0;  
let counter = DEFAULT;  // state - Model

window.addEventListener('DOMContentLoaded', function() {
    this.document.querySelector('#btnDecr').addEventListener('click',() => onDecreaseClicked())
    this.document.querySelector('#btnReset').addEventListener('click',() => onResetClicked())
    this.document.querySelector('#btnIncr').addEventListener('click',() => onIncreaseClicked())
})
/**
 * Handler - Controller
 */


function onIncreaseClicked() {
    increaseCounter()
}


function onResetClicked() {
    resetCounter()
}


function onDecreaseClicked() {
    decreaseCounter()
}


/**
 * Model
 */

function decreaseCounter() {
    counter--;
    render()
}

function resetCounter() {
    counter = DEFAULT;
    render()
}
 
function increaseCounter() {
    counter++;
    render()
}


function render() {
    const counterDom = document.querySelector('#counter')
    counterDom.textContent = counter
    styleCounter(counterDom)
}

function styleCounter(counterDom) {
    counterDom.classList.toggle('color-green', counter > 0)
    counterDom.classList.toggle('color-red', counter < 0)
    counterDom.classList.toggle('color-black', counter === 0)
}

// function styleCounter(counterDom) {
//     if (counter === 0) {
//         counterDom.style.color = 'black'
//     } else if (counter > 0 ) {
//         counterDom.style.color = 'green'
//     } else {
//         counterDom.style.color = 'red'
//     }
// }






// let counter = 0;

// const btnDecr = document.getElementById('btnDecr')
// const btnReset = document.getElementById('btnReset')
// const btnIncr = document.getElementById('btnIncr')
// let counterDom = document.getElementById('counter')

// btnDecr.addEventListener('click', function() {
//     counter--;
//     counterDom.innerHTML = counter
// })

// btnReset.addEventListener('click', function() {
//     counter = 0;
//     counterDom.innerHTML = counter
// })


// btnIncr.addEventListener('click', function() {
//     counter++;
//     counterDom.innerHTML = counter
// })