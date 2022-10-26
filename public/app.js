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
        let integer = numberValue.split('.')[0];
        let fractional = '0.' + numberValue.split('.')[1];
        const convert = new NumberBases(Number(integer), Number(baseValue));
        console.log(convert);
        const convertAgain = new NumberBases(Number(fractional), Number(baseValue));
        console.log(convertAgain.convertDecimal());
    }
    else {
        const numberValue = number.value;
        const baseValue = base.value;
        const convert = new NumberBases(Number(numberValue), Number(baseValue));
        console.log(convert.convertInteger());
    }
});
