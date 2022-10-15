export class NumberBases {
    convertible: number
    base: number
    
    constructor(
        convertible:number, base:number){
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
}