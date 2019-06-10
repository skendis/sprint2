'use strict'




//TODO:RENDER IMAGES TO CONTAINER
let keywords = [] // need to solve issue of local-storage deletion on refresh

function renderImages() {
    const images = getImgsForDisplay();
    const strHtmls = images.map(function (image) {
        return `<img src="images/img${image.id}.jpg" onclick="openEditor(${image.id})">`
    })
    $('.gallery').html(strHtmls.join(''));
}


function openEditor(imgIdx){
    changeSelectedImgId(imgIdx);
    renderControls();
    renderCanvas();
    $('.editor').removeClass('display-none');
}



// function onKeywordSearch(ev) {
//     ev.preventDefault()
//     let elKeyword = document.getElementById('keyword-search').value
//     saveToStorage('keywords', elKeyword)
// }

// function getKeywordMap(keywords) {
//     var keywordMap =
//         keywords.reduce(function(accumulator, keyword) {
//             if (accumulator[keyword] >= 1) accumulator[keyword]++;
//             else accumulator[keyword] = 1;
//             return accumulator;
//         }, {});
//     return keywordMap;
// }
// let storedKeywords = localStorage.getItem('keywords')
// let keywordsArr = JSON.parse(storedKeywords)
// console.log('keywordsArr:', keywordsArr);

// let wordCloud = getKeywordMap(keywordsArr);
// console.log('word-cloud map:', wordCloud);

// //TODO:OPEN EDITOR WITH CLICKED IMG

// //TODO:RENDER IMAGES BY FILTER

// // ------ word cloud setup ------------//
// const config = {
//     trace: true,
//     spiralResolution: 0.5, //Lower = better resolution
//     spiralLimit: 360 * 2,
//     lineHeight: 0.8,
//     xWordPadding: 0,
//     yWordPadding: 3,
// }


// var cloud = document.getElementById('word-cloud');
// cloud.style.position = 'relative';
// cloud.style.fontFamily = config.font;

// var traceCanvas = document.createElement('canvas');
// traceCanvas.width = cloud.offsetWidth;
// traceCanvas.height = cloud.offsetHeight;
// var traceCanvasCtx = traceCanvas.getContext('2d');
// cloud.appendChild(traceCanvas);

// var startPoint = {
//     x: cloud.offsetWidth / 2,
//     y: cloud.offsetHeight / 2
// };

// var wordsDown = [];

// // ------- Placement functions ----------//
// let angle
// let x
// let y

// function createWordObject(word, freq) {

//     var wordContainer = document.createElement('div');
//     wordContainer.style.position = 'absolute';
//     wordContainer.style.fontSize = freq * 3 + 10 + 'px';
//     wordContainer.style.lineHeight = config.lineHeight;
//     // wordContainer.style.transform = "translateX(-50%) translateY(-50%)"; //looks better without
//     wordContainer.appendChild(document.createTextNode(word));
//     return wordContainer;
// }

// function placeWord(word, x, y) {

//     cloud.appendChild(word);
//     word.style.left = x - word.offsetWidth / 2 + "px";
//     word.style.top = y - word.offsetHeight / 2 + "px";

//     wordsDown.push(word.getBoundingClientRect());
// }

// function trace(x, y) {
//     traceCanvasCtx.lineTo(x, y);
//     traceCanvasCtx.fillRect(x, y, 1, 1);
// }

// function spiral(i, callback) {
//     angle = config.spiralResolution * i;
//     x = (1 + angle) * Math.cos(angle);
//     y = (1 + angle) * Math.sin(angle);
//     return callback ? callback() : null;
// }

// function intersect(word, x, y) {
//     cloud.appendChild(word);

//     word.style.left = x - word.offsetWidth / 2 + "px";
//     word.style.top = y - word.offsetHeight / 2 + "px";

//     var currentWord = word.getBoundingClientRect();

//     cloud.removeChild(word);

//     for (var i = 0; i < wordsDown.length; i += 1) {
//         var comparisonWord = wordsDown[i];

//         if (!(currentWord.right + config.xWordPadding < comparisonWord.left - config.xWordPadding ||
//                 currentWord.left - config.xWordPadding > comparisonWord.right + config.wXordPadding ||
//                 currentWord.bottom + config.yWordPadding < comparisonWord.top - config.yWordPadding ||
//                 currentWord.top - config.yWordPadding > comparisonWord.bottom + config.yWordPadding)) {

//             return true;
//         }
//     }

//     return false;
// }

// // ------------THE word cloud ------------//

// (function placeWords() {
//     // ev.preventDefault()
//     var size = Object.keys(wordCloud).length;

//     console.log('size', size);
//     for (var i = 0; i < size; i++) {

//         var word = createWordObject((Object.keys(wordCloud)[i]), (Object.values(wordCloud)[i]))

//         for (var j = 0; j < config.spiralLimit; j++) {
//             //If the spiral function returns true, the word placed down and can break from the j loop
//             if (spiral(j, function() {
//                     if (!intersect(word, startPoint.x + x, startPoint.y + y)) {
//                         placeWord(word, startPoint.x + x, startPoint.y + y);
//                         return true;
//                     }
//                 })) {
//                 break;
//             }
//         }
//     }
// })();

// // --------- Spiral animation -----------------------//

// (function traceSpiral() {

//     traceCanvasCtx.beginPath();

//     if (config.trace) {
//         var frame = 1;

//         function animate() {
//             spiral(frame, function() {
//                 trace(startPoint.x + x, startPoint.y + y);
//             });

//             frame += 1;

//             if (frame < config.spiralLimit) {
//                 window.requestAnimationFrame(animate);
//             }
//         }

//         animate();
//     }
// })();