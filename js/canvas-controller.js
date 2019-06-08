'use strict'
let canvas;
let ctx;

function init() {
    //renderCanvas();
}

function renderCanvas() {
    canvas = document.querySelector('#meme-canvas');
    ctx = canvas.getContext('2d')
    var myImg = new Image();

    myImg.onload = function () {
        canvas.width = myImg.width;
        canvas.height = myImg.height
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(myImg, 0, 0, canvas.width, canvas.height)
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 1;
        ctx.shadowColor = 'black';

        gMeme.txts.forEach(text => {
            ctx.font = `${text.size}px ${text.font}`;
            ctx.fillStyle = text.color;
            ctx.textAlign = text.align;
            ctx.fillText(text.line, textAlign(canvas.width, text.align), canvas.height * text.yPos);
        });
    };
    myImg.src = `${returnImageByIdx(gMeme.selectedImgId).url}`;
}

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

function changeImg(id) {
    gMeme.selectedImgId = id;
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




