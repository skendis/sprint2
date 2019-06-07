'use strict'

function saveToStorage(key, value) {
    keywords.push(value)
    localStorage.setItem(key, JSON.stringify(keywords))
}

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}