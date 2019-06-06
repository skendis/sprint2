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


//TODO:OPEN EDITOR WITH CLICKED IMG

//TODO:RENDER IMAGES BY FILTER