'use strict'

function renderImages(keyword = null) {
    const images = getImagesForDisplay(keyword);

    const strHtmls = images.map(function (image) {
        return `<img src="images/img${image.id}.jpg" onclick="openEditor(${image.id})">`
    })
    $('.gallery').html(strHtmls.join(''));
}

function openEditor(imgIdx) {
    changeSelectedImgId(imgIdx);
    renderControls();
    renderCanvas();
    $('.editor').removeClass('display-none');
}

function renderWordsCloud() {
    var elCloud = document.querySelector('.words-cloud')
    var strHTML = '';

    for (var keyword in gKeywords) {
        strHTML += `<span class="keyword" style="font-size:${gKeywords[keyword] * 0.4}rem" onclick="renderImages('${keyword}')">${keyword}</span>`
    }
    $('.words-cloud').html(strHTML);
}