'use strict'


function renderControls() {

    const lines = getLines();
    let idx = 0;
    const length = lines.length;
    let strHtmls = lines.map(function (line) {
        return `<!-- CONTROL START -->
                <div class="editor-menu">
                    <div class="line-text-input">
                        <input type="text" name="line-input" id="" value="${line.line}" class="line-input"
                            onkeyup="onChangeText(${idx},this.value)">
                        <button class="editor-btn" onclick="openEditBox(${idx})"><i class="fas fa-sliders-h"></i></button>
                        ${idx===length-1?`<button class="editor-btn" onclick="onAddText()"><i class="fas fa-plus"></i></button>`:``}
                        ${idx===0?``:`<button class="editor-btn" onclick="onRemoveText(${idx})"><i class="far fa-trash-alt"></i></button>`}
                    </div>
                    <div id="editbox-${idx}" class="edit-box flex flex-wrap display-none">
                        <div class="color-picker flex align-center">
                            <i class="fas fa-paint-brush"></i>
                            <input class="jscolor" onchange="onChangeColor(${idx},this.value)">
                        </div>
                        <div class="font-picker flex align-center">
                            <i class="fas fa-font"></i>
                            <select onchange="onFontChange(${idx},this.value)">
                                <option value="Impact">Impact</option>
                                <option value="lato-regular">Lato</option>
                                <option value="arial">Arial</option>
                            </select>
                        </div>
                        <button class="editor-btn" onclick="onUpText(${idx})"><i class="fas fa-arrow-up"></i></button>
                        <button class="editor-btn" onclick="onDownText(${idx})"><i class="fas fa-arrow-down"></i></button>
                        <button class="editor-btn" onclick="onIncreaseText(${idx})">A+</button>
                        <button class="editor-btn" onclick="onDecreaseText(${idx})">A-</i></button>
                        <button class="editor-btn" onclick="onChangeAlign('left',${idx})"><i class="fas fa-align-left"></i></button>
                        <button class="editor-btn" onclick="onChangeAlign('center',${idx})"><i
                                class="fas fa-align-center"></i></button>
                        <button class="editor-btn" onclick="onChangeAlign('right',${idx++})"><i
                                class="fas fa-align-right"></i></button>
                    </div>
                </div>
                <!-- CONTROL END -->`

    })
    strHtmls = strHtmls.join('');
    strHtmls += `<div class="dialog-buttons flex justify-center">
                    <a class="editor-btn download-btn flex justify-center" href="#" onclick="saveImg(this)"
                        download="">Download</a>
                    <button class="editor-btn flex justify-center" onclick="closeEditor()">close editor</i></button>
                </div>`
    $('.editor-controls').html(strHtmls);

    //init the color picker after dynamic render to dom
    jscolor.installByClassName('jscolor');
}

function onAddText(){
    addLine();
    renderControls();
    renderCanvas();
}
function onRemoveText(id){
    deleteLine(id);
    renderControls();
    renderCanvas();
}
function openEditBox(id){
    $(`#editbox-${id}`).toggle('display-none');
}

function saveImg(elLink) {
    const data = canvas.toDataURL();
    elLink.href = data;
    elLink.download = 'meme-generator.jpg';
}

function onUpText(line) {
    changeYpos(line, -0.01)
    renderCanvas();
}

function onDownText(line) {
    changeYpos(line, 0.01)
    renderCanvas();
}

function onChangeText(line, text) {
    changeText(text, line);
    renderCanvas();
}

function onChangeColor(line, value) {
    changeTextColor(value, line);
    renderCanvas();
}

function onIncreaseText(lineIdx) {
    increaseTextSize(1, lineIdx)
    renderCanvas();
}

function onDecreaseText(lineIdx) {
    decreaseTextSize(1, lineIdx)
    renderCanvas();
}

function onChangeAlign(align, lineIdx) {
    changeTextAlign(align, lineIdx);
    renderCanvas();
}

function onFontChange(line, font) {
    changeFont(font, line);
    renderCanvas();
}
function closeEditor() {
    $('.editor').addClass('display-none');
    resetTexts();
}
function textAlign(canvasWidth, align) {
    var pos;
    switch (align) {
        case 'left':
            pos = 10;
            break;
        case 'right':
            pos = canvasWidth - 10;
            break;
        default:
            pos = canvasWidth / 2;
            break;
    }
    return pos;
}