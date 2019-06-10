'use strict'

function uploadImg(ev) {
    ev.preventDefault();

    document.getElementById('imgData').value = canvas.toDataURL("image/jpeg");
    openEditor();
   
}