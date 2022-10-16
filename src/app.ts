import { NumberBases } from './classes/NumberBases.js'


// form
const form = document.querySelector("#form") as HTMLFormElement
// inputs
const number = document.querySelector('#number') as HTMLInputElement
const base = document.querySelector('#base') as HTMLInputElement

base.addEventListener('input', () => {
    const numberValue = number.value
    const baseValue = base.value
    if (numberValue.includes('.')){
        let integer:any
        let decimal:any
        integer = numberValue.split('.')[0]
        decimal = "0. "+numberValue.split('.')[1]
        
        const convert = new NumberBases(integer, baseValue)
        console.log(convert.convertInteger())

        const convertAgain = new NumberBases(decimal, baseValue)
        console.log(convertAgain.convertDecimal())



        
        
    }else{
        console.log('Hello')
    }
})

