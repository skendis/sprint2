'use strict'
console.log("canvas ctrlr");
let canvas;
let ctx;
function init() {
    canvas = document.querySelector('#canvas');
    ctx = canvas.getContext('2d')
    canvas.width = 200;
    canvas.height = 200;

    var myImg = new Image();
    myImg.onload = function () {
        canvas.width = myImg.width;
        canvas.height = myImg.height;
        ctx.drawImage(myImg, 0, 0, myImg.width, myImg.height)
    };
    myImg.src = '../images/04.jpg';
}



function renderCanvas(meme) {

}






