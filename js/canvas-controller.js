'use strict'
let canvas;
let ctx;

var gMeme = {
    selectedImgId: 5,
    txts: [
        {
            line: 'I never eat falafel',
            size: 3,
            align: 'center',
            color: 'white',
            font: 'impact'
        },
        {
            line: 'I never eat falafel again',
            size: 3,
            align: 'center',
            color: 'white',
            font: 'impact'
        }
    ]
}
function init() {
    renderCanvas();
}



function renderCanvas() {
    canvas = document.querySelector('#canvas');
    ctx = canvas.getContext('2d')
    var myImg = new Image();

    myImg.onload = function () {
        canvas.width = myImg.width;
        canvas.height = myImg.height;
        ctx.drawImage(myImg, 0, 0, myImg.width, myImg.height)
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 1;
        ctx.shadowColor = 'black';

        for (var i = 0; i < gMeme.txts.length; i++) {
            ctx.font = `${gMeme.txts[i].size}rem ${gMeme.txts[i].font}`;
            ctx.fillStyle = gMeme.txts[i].color;
            ctx.textAlign = gMeme.txts[i].align;
            ctx.fillText(gMeme.txts[i].line, canvas.width / 2, i === 0 ? 70 : (canvas.height - 30));
        }
    };
    myImg.src = `${returnImageByIdx(gMeme.selectedImgId).url}`;

}






