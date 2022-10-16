export class NumberBases {
    constructor(convertible, base) {
        this.convertible = convertible;
        this.base = base;
    }
    convertInteger() {
        let remainder;
        let arrays = [];
        let division;
        while (this.convertible !== 0) {
            remainder = this.convertible % this.base;
            division = this.convertible / this.base;
            this.convertible = Math.floor(division);
            arrays.push(remainder);
        }
        return arrays;
    }
    convertDecimal() {
        let multiply;
        let quotient;
        let arrays = [];
        while (this.convertible !== 0) {
            multiply = this.convertible * this.base;
            quotient = Math.floor(multiply);
            this.convertible = multiply - quotient;
            arrays.push(quotient);
        }
        return arrays;
    }
}
