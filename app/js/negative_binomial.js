let nBinomial; // instance of Binomial class
let validate; // instance of ValidateInput class

/**
 *Function: callNegativeBinomial(data)-call appropriate method of the Negative Binomial class as needed
 * */
// function callNegativeBinomial(num, value, value2, value3) {
//   // const nBinomial;
//   switch (num) {
//     case 0:// on page load
//       nBinomial = new NegativeBinomial(value, value2, value3);
//       break;
//     case 1:// x
//       nBinomial.x = value;
//       nBinomial.verifyX();
//       break;
//     case 2:// k
//       nBinomial.k = value;
//       nBinomial.verifyK();
//       break;
//     case 3:// p
//       nBinomial.p = value;
//       nBinomial.verifyP();
//       break;
//     case 'reset':// reset button
//       nBinomial.reset();
//       break;
//     case 'calculate':// result button
//       nBinomial.calculate();
//       break;
//     default:
//       break;
//   }
// }

/**
 *Class: NegativeBinomial - all methods that negative-binomial will be needed
 * */
class NegativeBinomial {
  constructor(a, b, c) {
    validate = new ValidateInput();
    this.x = -1;
    this.k = -1;
    this.p = -1;
    this.error1 = a;
    this.error2 = b;
    this.error3 = c;
    this.result = document.getElementById('result');
  }

  verifyX() {
    switch (this.checkX()) {
      case 1: // when x is less than 1
        this.x = -1;
        this.error1.style.color = 'red';
        this.error1.value = 'x must be at least 1';
        break;
      case 2: // when x is not valid Integer
        this.x = -1;
        this.error1.style.color = 'red';
        this.error1.value = 'Input must be valid Integer';
        break;
      default: // when x is valid
        this.x = parseFloat(this.x);
        this.error1.style.color = 'green';
        this.error1.value = '✔';
        break;
    }
  }

  verifyK() {
    if (this.checkK() === true) {
      this.k = parseFloat(this.k);
      this.error2.style.color = 'green';
      this.error2.value = '✔';
    } else {
      this.k = -1;
      this.error2.style.color = 'red';
      this.error2.value = 'Input must be valid Integer';
    }
  }

  verifyP() {
    switch (this.checkP()) {
      case 1: // when p is out of range
        this.p = -1;
        this.error3.style.color = 'red';
        this.error3.value = 'p must between 1 and 0';
        break;
      case 2: // when p is not valid
        this.p = -1;
        this.error3.style.color = 'red';
        this.error3.value = 'Input must be valid';
        break;
      default: // when p is valid
        this.p = parseFloat(this.p);
        this.error3.style.color = 'green';
        this.error3.value = '✔';
        break;
    }
  }

  /**
   *Function: calculate()
   *Return:
   *_if all input are valid - do the computation for Negative Binomial and display result
   *_if at least one of the input is invalid - print error message in the result box
   * */
  calculate() {
    if (this.checkAll() === true) {
      this.result.disabled = false;
      this.result.style.color = 'black';
      this.result.value = this.negativeBinomialFormula();
    } else {
      this.result.style.color = 'red';
      this.result.value = 'Invalid Input';
    }
  }

  /**
   *Function: negativeBinomialFormula() - computation of Negative Binomial
   * */
  negativeBinomialFormula() {
    const v1 = validate.Combination(this.x - 1, this.k - 1);
    const v2 = Math.pow(this.p, this.k);
    const v3 = Math.pow(1 - this.p, this.x - this.k);
    return (v1 * v2 * v3);
  }

  /**
   * Function: checkX()
   *  Rule: x value must be a valid Integer number, x>=1
   *  Return:
   *    _if x is not valid, return 2
   *    _if x is valid but x<1, return 1
   *    _else - return 3
   * */
  checkX() {
    if (validate.checkIfValidInput(this.x) === true && validate.isDecimal === false) {
      if (this.x < 1) return 1;
      return 3;
    }
    return 2;
  }

  /**
   *Function: checkK()
   *  Rule: k value must be a valid Integer
   *  Return:
   *    _if the rule has not been satisfied - return false
   *    _else - return true
   * */
  checkK() {
    if (validate.checkIfValidInput(this.k) === true && validate.isDecimal === false) { // valid for X
      return true;
    }
    return false;
  }

  /**
   * Function: checkP()
   *  Rule: p value must be a valid float number, and p=[0,1]
   *  Return:
   *    _3: if all rules have been satisfied - print a check mark in the error box
   *    _2: if p value is not valid
   *    _1: if p is greater than 1
   * */
  checkP() {
    if (validate.checkIfValidInput(this.p) === true) {
      if (this.p <= 1 && this.p >= 0) return 3;
      return 1;
    }
    return 2;
  }

  /**
   * Function: checkAll()
   *  Rules: x, k, and p are valid number, x>=k and p=[0,1]
   *  Return:
   *    _true - if all rules have been satisfied
   *    _false - if at least one of the rules has not been satisfied
   * */
  checkAll() {
    if (this.k === -1 || this.x === -1 || this.p === -1) {
      this.result.style.color = 'red';
      this.result.value = 'Invalid Input';
      return false;
    }
    if (this.k > this.x) {
      this.error2.value = 'k must be less than or equal x';
      this.error1.value = '!';
      return false;
    }
    this.error1.value = '✔';
    this.error2.value = '✔';
    this.error3.value = '✔';
    return true;
  }

  /**
   * Function: reset() - reset the value of the input boxes to 0 and empty the value of error boxes
   * */
  reset() {
    document.getElementById('x').value = '';
    document.getElementById('k').value = '';
    document.getElementById('p').value = '';
    this.error1.value = '';
    this.error2.value = '';
    this.error3.value = '';
    this.result.value = '';
    this.k = -1;
    this.p = -1;
    this.x = -1;
    this.result.disabled = true;
  }
}

/**
 *Function: callNegativeBinomial(data)-call appropriate method of the Negative Binomial class as needed
 * */
function callNegativeBinomial(num, value, value2, value3) {
  // const nBinomial;
  switch (num) {
    case 0:// on page load
      nBinomial = new NegativeBinomial(value, value2, value3);
      break;
    case 1:// x
      nBinomial.x = value;
      nBinomial.verifyX();
      break;
    case 2:// k
      nBinomial.k = value;
      nBinomial.verifyK();
      break;
    case 3:// p
      nBinomial.p = value;
      nBinomial.verifyP();
      break;
    case 'reset':// reset button
      nBinomial.reset();
      break;
    case 'calculate':// result button
      nBinomial.calculate();
      break;
    default:
      break;
  }
}