'use strict'

let keywords = []

function saveToStorage(key, value) {
    let strValue = JSON.stringify(value)
    keywords.push(strValue)
    localStorage.setItem(key, keywords)
}

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}