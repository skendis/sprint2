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
        canvas.height = myImg.height;
        ctx.drawImage(myImg, 0, 0, canvas.width, canvas.height)
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 1;
        ctx.shadowColor = 'black';

        for (var i = 0; i < gMeme.txts.length; i++) {
            ctx.font = `${gMeme.txts[i].size}px ${gMeme.txts[i].font}`;
            ctx.fillStyle = gMeme.txts[i].color;
            ctx.textAlign = gMeme.txts[i].align;
            ctx.fillText(gMeme.txts[i].line, canvas.width / 2, i === 0 ? 70 : (canvas.height - 30));
        }
    };
    myImg.src = `${returnImageByIdx(gMeme.selectedImgId).url}`;
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




