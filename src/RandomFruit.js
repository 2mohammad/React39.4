import React from 'react';
import {choice, remove} from './helpers';
import items from './foods'

const RandomFruit = () => {
    const fruitChoice = choice(items);
    let remain = remove(items, fruitChoice).length
    return (
        <>
        <p>I would like one {fruitChoice}, please</p>
        <p>Here you go: {fruitChoice}</p>
        <p> Delicious! May I have another.</p>
        <p> I am sorry, we are all out. We have {remain} left.</p>
        </>
    )
}

export default RandomFruit