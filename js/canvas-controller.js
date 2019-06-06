'use strict'
console.log("canvas ctrlr");
let canvas;
let ctx;


var gMeme = {
    selectedImgId: 5,
    txts: [
        {
            line: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}


function init() {
    canvas = document.querySelector('#canvas');
    ctx = canvas.getContext('2d')
    canvas.width = 300;
    canvas.height = 300;
}



function renderCanvas(meme){
    
}