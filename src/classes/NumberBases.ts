export class NumberBases {
    convertible: any
    base: any
    
    constructor(
        convertible:any, base:any){
        this.convertible = convertible
        this.base = base
    }

    
    convertInteger(){
        let remainder:number
        let arrays:number[] = []
        let division:number
        while(this.convertible!==0){ 
            remainder = this.convertible%this.base
            division = this.convertible/this.base
            this.convertible = Math.floor(division)
            arrays.push(remainder) 
        }

        return arrays
    }

    convertDecimal(){
        let multiply:number
        let quotient:number
        let arrays:number[] = []
        while(this.convertible !== 0){
            multiply = this.convertible * this.base
            quotient = Math.floor(multiply)
            this.convertible = multiply - quotient
            arrays.push(quotient)  
        }
        return arrays
    }
}