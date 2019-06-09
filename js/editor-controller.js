'use strict'

function saveImg(elLink) {
    const data = canvas.toDataURL();
    elLink.href = data;
    elLink.download = 'meme-generator.jpg';
}

function onUpText(line) {
    changeYpos(line, -0.01)
    renderCanvas();
}

function onDownText(line) {
    changeYpos(line, 0.01)
    renderCanvas();
}

function onChangeText(line, text) {
    changeText(text, line);
    renderCanvas();
}

function onChangeColor(line, value) {
    changeTextColor(value, line);
    renderCanvas();
}

function onIncreaseText(lineIdx) {
    increaseTextSize(1, lineIdx)
    renderCanvas();
}

function onDecreaseText(lineIdx) {
    decreaseTextSize(1, lineIdx)
    renderCanvas();
}

function onChangeAlign(align, lineIdx) {
    changeTextAlign(align, lineIdx);
    renderCanvas();
}

function onFontChange(line, font) {
    changeFont(font, line);
    renderCanvas();
}
function closeEditor(){
    $('.editor').addClass('display-none');
}
function textAlign(canvasWidth, align) {
    var pos;
    switch (align) {
        case 'left':
            pos = 10;
            break;
        case 'right':
            pos = canvasWidth - 10;
            break;
        default:
            pos = canvasWidth / 2;
            break;
    }
    return pos;
}