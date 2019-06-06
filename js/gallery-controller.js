'use strict'

//TODO:RENDER IMAGES TO CONTAINER


function renderImages() {
    var images = getImagesForDisplay()
    var strHtmls = images.map(function(image) {
        return `
        <img src="images/${image.id}.jpg onclick ="openEditor(${image.id})">
        `
    })
    $('.gallery').html(strHtmls.join(''))
}

function onKeywordSearch(ev) {
    ev.preventDefault()
    let elKeyword = document.getElementById('keyword-search').value
    saveToStorage('keywords', elKeyword)
}

function getKeywordMap(keywords) {
    var keywordMap =
        keywords.reduce(function(accumulator, keyword) {
            if (accumulator[keyword] >= 1) accumulator[keyword]++;
            else accumulator[keyword] = 1;
            return accumulator;
        }, {});
    return keywordMap;
}
let storedKeywords = localStorage.getItem('keywords')
let keywordsArr = JSON.parse(storedKeywords)
console.log(keywordsArr);

let wordCloud = getKeywordMap([keywordsArr]);
console.log(wordCloud);

//TODO:OPEN EDITOR WITH CLICKED IMG

//TODO:RENDER IMAGES BY FILTER