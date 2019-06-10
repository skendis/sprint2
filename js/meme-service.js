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
    { id: 9, url: 'images/img9.jpg', keywords: ['happy'] },
    { id: 10, url: 'images/img10.jpg', keywords: ['happy'] },
    { id: 11, url: 'images/img11.jpg', keywords: ['happy'] },
    { id: 12, url: 'images/img12.jpg', keywords: ['funny', 'happy'] },

];
var gMeme = {
    selectedImgId: 0,
    selectedImgData: null,
    txts: [
        {
            line: 'new line',
            size: 40,
            align: 'center',
            color: 'white',
            font: 'Impact',
            yPos: 0.2
        },
        {
            line: 'new line',
            size: 40,
            align: 'center',
            color: 'white',
            font: 'Impact',
            yPos: 0.9
        },

    ]
}
//get image by id 
function returnImageByIdx(imageIdx) {
    return gImgs.find((img) => { return img.id === imageIdx });
}

function getImagesForDisplay(keyword = null) {
    if (keyword === null) return gImgs;
    return gImgs.filter((image) => {
        let lcKeyword = keyword.toLowerCase();
        var regex = RegExp(`${lcKeyword}`);
        return regex.test(image.keywords);
    })
 }

function addLine() {
    let line;
    switch (gMeme.txts.length) {
        case 0:
            line = {
                line: 'new line',
                size: 40,
                align: 'center',
                color: 'white',
                font: 'Impact',
                yPos: 0.2
            }
            break;
        case 1:
            line = {
                line: 'new line',
                size: 40,
                align: 'center',
                color: 'white',
                font: 'Impact',
                yPos: 0.9
            }
            break;
        default:
            line = {
                line: 'new line',
                size: 40,
                align: 'center',
                color: 'white',
                font: 'Impact',
                yPos: 0.5
            }
            break;
    }
    gMeme.txts.push(line);
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
function getLines() {
    return gMeme.txts;
}
function resetTexts() {
    gMeme.txts = [
        {
            line: 'new line',
            size: 40,
            align: 'center',
            color: 'white',
            font: 'Impact',
            yPos: 0.2
        },
        {
            line: 'new line',
            size: 40,
            align: 'center',
            color: 'white',
            font: 'Impact',
            yPos: 0.9
        },
    ]
}