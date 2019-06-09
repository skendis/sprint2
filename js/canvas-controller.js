'use strict'
let canvas;
let ctx;


function renderCanvas() {
    canvas = document.querySelector('#meme-canvas');
    ctx = canvas.getContext('2d')
    var myImg = new Image();
    myImg.onload = function () {
        canvas.width = 370;
        canvas.height = 340;
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





