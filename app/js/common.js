/**
 * Class: ValidateInput - to check if given data are valid
 * consists of:
 *          checkIfValidInput(value);
 *          checkIfValid(value);
 *          checkNumberOnly(value);
 *          Combination(n,r);
 *          Factorial(n);
 * * */
class ValidateInput {
  constructor() {
    this.isDecimal = false;
  }

  /**
   * Function: checkIfValidInput(data)
   * return true, if the given data is a valid float numbers, eg: 0.2, 45
   * return false, if the given data is not a valid float numbers, eg: e42, 34.e, 25., .qw, .34
   * */
  checkIfValidInput(value) {
    return !(this.checkIfValid(value) === false || this.checkNumberOnly(value) === false);
  }

  /**
   * Function: checkIfValid(data)
   * return true, if the given data can be parse into float number, eg: 45, 0.3, 45e, 64e.
   * return false, if the given data cannot be parse into float number, eg: we234, num
   * */
  checkIfValid(value) {
    this.value = value;
    return !Number.isNaN(parseFloat(this.value));
  }

  /**
   * Function: checkNumberOnly(data)
   * return true, if the given data is in a valid number format, eg: 12, 12.3
   * return false, if the given data is not in a valid number format, eg: 98.a, 234.424hi
   * */
  checkNumberOnly(value) {
    this.value = value;
    let getDecimal = false;
    this.isDecimal = false;
    for (let i = 0; i < this.value.length; i++) { // loop to run through each character of the input
      if (getDecimal === false) {
        if (this.value.charCodeAt(i) !== 46) { // check if each character is either 0-9 or decimal
          if (this.value.charCodeAt(i) < 48 || this.value.charCodeAt(i) > 57) {
            return false;
          }
        }
        if (this.value.charCodeAt(i) === 46) { // check if that specific character is a decimal point and set flag
          getDecimal = true;
          this.isDecimal = true;
          if ((i + 1) === this.value.length) return false;
          i++;
        }
      }
      if (getDecimal === true) { // check if character comes after decimal point contains only numbers, eg: 234.341
        if (this.value.charCodeAt(i) < 48 || this.value.charCodeAt(i) > 57) {
          return false;
        }
      }
    }
    return true;
  }

  /**
   *  Function: Combination(n,r)
   * return result of Math_combination of value n and r
   * */
  Combination(n, r) {
    const top = this.Factorial(n);// nominator
    const bottom = this.Factorial(r) * this.Factorial(n - r);// denominator
    return top / bottom;
  }

  /**
   * Function: Factorial(n)
   * return result of Math_factorial of value n
   * * */
  Factorial(n) {
    if (n === 0) return 1;
    return n * this.Factorial(n - 1);
  }
}
