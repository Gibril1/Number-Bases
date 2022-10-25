import { NumberBases } from './classes/NumberBases.js';
// form
const form = document.querySelector("#form");
// inputs
const number = document.querySelector('#number');
const base = document.querySelector('#base');
base.addEventListener('input', () => {
    const numberValue = number.value;
    const baseValue = base.value;
    if (numberValue.includes('.')) {
        let integer;
        let decimal;
        integer = numberValue.split('.')[0];
        decimal = "0. " + numberValue.split('.')[1];
        const convert = new NumberBases(integer, baseValue);
        console.log(convert.convertInteger());
        const convertAgain = new NumberBases(decimal, baseValue);
        console.log(convertAgain.convertDecimal());
    }
    else {
        const numberValue = number.value;
        const baseValue = base.value;
        const convert = new NumberBases(numberValue, baseValue);
        console.log(convert.convertInteger());
    }
});
