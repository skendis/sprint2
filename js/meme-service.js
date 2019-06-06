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
    selectedimagesId: 5,
    txts: [
        {
            line: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}


//get image by id 
function returnImageByIdx(imageIdx) {
    return gImgs.find(function (img) { return gImgs.id === imageIdx });
}

function getImagesForDisplay(){






    return 
}