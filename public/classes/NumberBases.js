export class NumberBases {
    constructor(convertible, base) {
        this.convertible = convertible;
        this.base = base;
    }
    alphabetConversion(quotient) {
        let alphaNumeral = {
            10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F', 16: 'G', 17: 'H', 18: 'I', 19: 'J', 20: 'K', 21: 'L', 22: 'M', 23: 'N', 24: 'O', 25: 'P', 26: 'Q', 27: 'R', 28: 'S', 29: 'T', 30: 'U', 31: 'V', 32: 'W', 33: 'X', 34: 'Y', 35: 'z'
        };
        return alphaNumeral[quotient];
    }
    convertInteger() {
        let remainder;
        let arrays = [];
        let division;
        while (this.convertible !== 0) {
            remainder = this.convertible % this.base;
            if (remainder > 9) {
                remainder = this.alphabetConversion(remainder);
            }
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
        let alpha = '';
        while (this.convertible !== 0) {
            multiply = this.convertible * this.base;
            quotient = Math.floor(multiply);
            arrays.push(quotient);
            if (quotient > 9) {
                alpha = this.alphabetConversion(quotient);
                arrays.push(alpha);
            }
            this.convertible = multiply - quotient;
        }
        return arrays;
    }
}
