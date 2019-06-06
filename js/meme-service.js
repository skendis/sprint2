'use strict'

var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [
    { id: 1, url: 'images/00.jpg', keywords: ['happy'] },
    { id: 2, url: 'images/01.jpg', keywords: ['happy'] },
    { id: 3, url: 'images/02.jpg', keywords: ['happy'] },
    { id: 4, url: 'images/03.jpg', keywords: ['happy'] },
    { id: 5, url: 'images/04.jpg', keywords: ['happy'] },
    { id: 6, url: 'images/05.jpg', keywords: ['happy'] },
    { id: 7, url: 'images/06.jpg', keywords: ['happy'] },
    { id: 8, url: 'images/07.jpg', keywords: ['happy'] },
    { id: 9, url: 'images/08.jpg', keywords: ['happy'] },
    { id: 10, url: 'images/09.jpg', keywords: ['happy'] },
    { id: 11, url: 'images/010.jpg', keywords: ['happy'] },
    { id: 12, url: 'images/011.jpg', keywords: ['happy'] },
    { id: 13, url: 'images/012.jpg', keywords: ['happy'] },
    { id: 14, url: 'images/popo.jpg', keywords: ['funny puk'] }
];
var gMeme = {
        selectedImgId: 3,
        txts: [{
                line: 'I never eat McDonald\'s',
                size: 1.8,
                align: 'center',
                color: 'white',
                font: 'impact'
            },
            {
                line: 'I never eat McDonald\'s again',
                size: 1.4,
                align: 'center',
                color: 'white',
                font: 'impact'
            }
        ]
    }
    //get image by id 
function returnImageByIdx(imageIdx) {
    return gImgs.find((img) => { return img.id === imageIdx });
}
//get all imgs or filterd imgs
function getImgsForDisplay(keyword = null) {
    if (keywords === null) return gImgs;
    return gImgs.filter((image) => {
        image.keywords.forEach(word => {
            return (word === keyword);
        });
    })
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

function changeTextColor(color, idx) {
    gMeme.txts[idx].color = color;
}

function changeTextAlign(align, idx) {
    gMeme.txts[idx].align = align;
}

function changeTextSize(size, idx) {
    gMeme.txts[idx].size = size;
}

function deleteLine(idx) {
    gMeme.txts.splice(idx, 1);
}