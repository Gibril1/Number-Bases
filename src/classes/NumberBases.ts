export class NumberBases {
    convertible: number
    base: number
    
    constructor(
        convertible:number, base:number){
        this.convertible = convertible
        this.base = base
    }

    alphabetConversion(quotient:number):string{
        let alphaNumeral:any = {
            10:'A', 11:'B', 12:'C', 13:'D', 14:'E',15:'F',16:'G',17:'H',18:'I',19:'J',20:'K',21:'L',22:'M',23:'N', 24:'O', 25:'P', 26:'Q', 27:'R', 28:'S', 29:'T', 30:'U', 31:'V', 32:'W', 33:'X', 34:'Y',35:'Z'
        }

        return alphaNumeral[quotient]
    }
    
    convertInteger(){
        let remainder:number|string
        let arrays:(number|string)[] = []
        let division:number
        while(this.convertible !== 0){ 
            remainder = this.convertible%this.base
            if (remainder > 9){
                remainder = this.alphabetConversion(remainder)
            }
            division = this.convertible/this.base
            this.convertible = Math.floor(division)
            arrays.push(remainder) 
        }

        return arrays
    }

    convertDecimal(){
        let multiply:number
        let quotient:any
        let arrays:(number|string)[] = []
        let count = 0
        
        while(this.convertible!==0){
            multiply=this.convertible*this.base
          
            quotient = Math.floor(multiply)
            

            if(count==20){
                break
            }
            count+=1
            this.convertible = multiply-quotient
            
            if(quotient > 9){
                quotient = this.alphabetConversion(quotient)
                
                arrays.push(quotient)
            }

            arrays.push(quotient)
        }
        
        return arrays
        
    }
}