'use strict'

function renderImages(keyword = null) {
    const images = getImagesForDisplay(keyword);
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

