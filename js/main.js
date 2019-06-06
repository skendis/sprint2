'use strict'

let gFontSize = 16
let textPos = 0

function getColor() {
    let fontColor = document.querySelector('#font-color').value
    return fontColor
}

function increaseFontSizeBy1px(ev) {
    ev = gFontSize++
        console.log(gFontSize, 'gFontSize');
}

function decreaseFontSizeBy1px(ev) {
    ev = gFontSize--
        console.log(gFontSize, 'gFontSize');
}