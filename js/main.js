'use strict'

let gFontSize = 16
let gTextPos = 0
let gCtx


function getColor() {
    let fontColor = document.querySelector('#font-color').value
    return fontColor
}

function increaseFontSize(ev) {
    ev = gFontSize++
        console.log(gFontSize, 'gFontSize');
}

function decreaseFontSize(ev) {
    ev = gFontSize--
        console.log(gFontSize, 'gFontSize');
}

function elevateText(ev) {
    // if (gTextPos >= ) // needs to add max height
    ev = gTextPos++
        console.log(gTextPos, 'gTextPos');
}

function lowerText(ev) {
    ev = gTextPos--
        console.log(gTextPos, 'gTextPos');
}

// function clearLine(){

// }