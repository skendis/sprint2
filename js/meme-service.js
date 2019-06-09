'use strict'

var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [
    { id: 1, url: 'images/img1.jpg', keywords: ['happy'] },
    { id: 2, url: 'images/img2.jpg', keywords: ['happy'] },
    { id: 3, url: 'images/img3.jpg', keywords: ['happy'] },
    { id: 4, url: 'images/img4.jpg', keywords: ['happy'] },
    { id: 5, url: 'images/img5.jpg', keywords: ['happy'] },
    { id: 6, url: 'images/img6.jpg', keywords: ['happy'] },
    { id: 7, url: 'images/img7.jpg', keywords: ['happy'] },
    { id: 8, url: 'images/img8.jpg', keywords: ['happy'] },

];
var gMeme = {
    selectedImgId: 3,
    txts: [{
        line: 'this is line 1',
        size: 40,
        align: 'center',
        color: 'white',
        font: 'Impact',
        yPos: 0.2
    },
    {
        line: 'this is line 2',
        size: 40,
        align: 'center',
        color: 'white',
        font: 'Impact',
        yPos: 0.9
    }
    ]
}
//get image by id 
function returnImageByIdx(imageIdx) {
    return gImgs.find((img) => { return img.id === imageIdx });
}
//get all imgs or filterd imgs
function getImgsForDisplay(keyword = null) {
return gImgs
}
function addLine(newLine) {
    const line = {
        line: newLine.line,
        size: newLine.size,
        align: newLine.align,
        color: newLine.color
    }
    gMeme.push(line);
}
function changeText(str, idx) {
    gMeme.txts[idx].line = str;
}
function changeFont(font, idx) {
    gMeme.txts[idx].font = `${font}`;
}
function changeTextColor(color, idx) {
    gMeme.txts[idx].color = `#${color}`;
}
function changeTextAlign(align, idx) {
    gMeme.txts[idx].align = align;
}
function increaseTextSize(size, idx) {
    gMeme.txts[idx].size += size;
}
function decreaseTextSize(size, idx) {
    gMeme.txts[idx].size -= size;
}
function deleteLine(idx) {
    gMeme.txts.splice(idx, 1);
}
function changeYpos(idx, amount) {
    gMeme.txts[idx].yPos += amount;
}
function changeSelectedImgId(id) {
    gMeme.selectedImgId = id;
}