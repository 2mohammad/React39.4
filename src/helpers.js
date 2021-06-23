import React from 'react'

const choice = (items) => {
    const ridx = Math.floor(Math.random() * items.length);
    const randElement = items[ridx]
    return randElement
} 

const remove = (items, item) => {
    const searchResult = items.filter((i) =>{return i !== item})
    return searchResult
}

export {choice, remove}