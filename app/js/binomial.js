let binomial; // instance of Binomial class
let validate; // instance of ValidateInput class

/**
 *Class: Binomial - all methods that binomial will be needed
 * */
class Binomial {
  constructor(a, b, c) {
    validate = new ValidateInput();
    this.x = -1;
    this.n = -1;
    this.p = -1;
    this.error1 = a;
    this.error2 = b;
    this.error3 = c;
    this.result = document.getElementById('result');
  }

  verifyX() {
    if (this.checkX() === true) {
      this.x = parseFloat(this.x);
      this.error1.style.color = 'green';
      this.error1.value = '✔';
    } else {
      this.x = -1;
      this.error1.style.color = 'red';
      this.error1.value = 'Input must be valid Integer';
    }
  }

  verifyN() {
    switch (this.checkN()) {
      case 1: // when n is less than 1
        this.n = -1;
        this.error2.style.color = 'red';
        this.error2.value = 'n must be at least 1';
        break;
      case 2: // when n is not valid Integer
        this.n = -1;
        this.error2.style.color = 'red';
        this.error2.value = 'Input must be valid Integer';
        break;
      default: // when n is valid
        this.n = parseFloat(this.n);
        this.error2.style.color = 'green';
        this.error2.value = '✔';
        break;
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
   *_if all input are valid - do the computation for Binomial and display result
   *_if at least one of the input is invalid - print error message in the result box
   * */
  calculate() {
    if (this.checkAll() === true) {
      this.result.disabled = false;
      this.result.style.color = 'black';
      this.result.value = this.binomialFormula();
    } else {
      this.result.style.color = 'red';
      this.result.value = 'Invalid Input';
    }
  }

  /**
   *Function: binomialFormula() - computation of Binomial
   * */
  binomialFormula() {
    const v1 = validate.Combination(this.n, this.x);
    const v2 = Math.pow(this.p, this.x);
    const v3 = Math.pow(1 - this.p, this.n - this.x);
    return (v1 * v2 * v3);
  }

  /**
   *Function: checkX()
   *  Rule: x value must be a valid Integer
   *  Return:
   *    _if the rule has not been satisfied - return false
   *    _else - return true
   * */
  checkX() {
    if (validate.checkIfValidInput(this.x) === true && validate.isDecimal === false) { // valid for X
      return true;
    }
    return false;
  }

  /**
   * Function: checkN()
   *  Rule: n value must be a valid Integer number, n>=1
   *  Return:
   *    _if n is not valid, return 2
   *    _if n is valid but n<1, return 1
   *    _else - return 3
   * */
  checkN() {
    if (validate.checkIfValidInput(this.n) === true && validate.isDecimal === false) {
      if (this.n < 1) return 1;
      return 3;
    }
    return 2;
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
   *  Rules: x, n, and p are valid number, n >=x and p=[0,1]
   *  Return:
   *    _true - if all rules have been satisfied
   *    _false - if at least one of the rules has not been satisfied
   * */
  checkAll() {
    if (this.n === -1 || this.x === -1 || this.p === -1) {
      this.result.style.color = 'red';
      this.result.value = 'Invalid Input';
      return false;
    }
    if (this.n < this.x) {
      this.error1.value = 'x must be less than or equal n';
      this.error2.value = '!';
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
    document.getElementById('n').value = '';
    document.getElementById('p').value = '';
    this.error1.value = '';
    this.error2.value = '';
    this.error3.value = '';
    this.result.value = '';
    this.n = -1;
    this.p = -1;
    this.x = -1;
    this.result.disabled = true;
  }
}

/**
 *Function: callBinomial(data)-call appropriate method of the Binomial class as needed
 * */
function callBinomial(num, value, value2, value3) {
  switch (num) {
    case 0:// on page load
      binomial = new Binomial(value, value2, value3);
      break;
    case 1:// x
      binomial.x = value;
      binomial.verifyX();
      break;
    case 2:// n
      binomial.n = value;
      binomial.verifyN();
      break;
    case 3:// p
      binomial.p = value;
      binomial.verifyP();
      break;
    case 'reset':// reset button
      binomial.reset();
      break;
    case 'calculate':// result button
      binomial.calculate();
      break;
    default:
      break;
  }
}