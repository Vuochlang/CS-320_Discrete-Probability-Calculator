let hypergeometric;
let validate;

class Hypergeometric {
  constructor(a, b, c, d) {
    validate = new ValidateInput();
    this.x = -1;
    this.n = -1;
    this.N = -1;
    this.k = -1;
    this.error1 = a;
    this.error2 = b;
    this.error3 = c;
    this.error4 = d;
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
      this.error1.value = 'Input must be valid integer';
    }
  }

  verifyn() {
    switch (this.checkn()) {
      case 1: // n >= x is true
        this.n = parseFloat(this.n);
        this.error2.style.color = 'green';
        this.error2.value = '✔';
        break;
      case 2: // when n !>= x
        this.n = -1;
        this.error2.style.color = 'red';
        this.error2.value = 'n must be greater than or equal to x';
        break;
      default: // when n is not a integer
        this.n = -1;
        this.error2.style.color = 'red';
        this.error2.value = 'Input must be valid integer';
        break;
    }
  }

  verifyN() {
    switch (this.checkN()) {
      case 1: // N is good
        this.N = parseFloat(this.N);
        this.error3.style.color = 'green';
        this.error3.value = '✔';
        break;
      case 2: // when N >= n but not >= 1
        this.N = -1;
        this.error3.style.color = 'red';
        this.error3.value = 'N must be greater than or equal to 1';
        break;
      case 3: // when neither is true
        this.N = -1;
        this.error3.style.color = 'red';
        this.error3.value = ' N must be greater than or equal to 1 and greater than or equal to n';
        break;
      default: // N is valid
        this.N = -1;
        this.error3.style.color = 'red';
        this.error3.value = 'Input must be valid integer';
        break;
    }
  }

  verifyk() {
    switch (this.checkK()) {
      case 1: // k is good
        this.k = parseFloat(this.k);
        this.error4.style.color = 'green';
        this.error4.value = '✔';
        break;
      case 2: // when k !<= n but k >= x
        this.k = -1;
        this.error4.style.color = 'red';
        this.error4.value = 'k must be less than or equal to n';
        break;
      case 3: // when neither is true
        this.k = -1;
        this.error4.style.color = 'red';
        // this.error4.value = ' k must be less than or equal to n and greater or equal to x';
        this.error4.value = 'x <= k <= n';
        break;
      default: // k is invalid
        this.k = -1;
        this.error4.style.color = 'red';
        this.error4.value = 'Input must be valid integer';
        break;
    }
  }

  calculate() {
    if (this.checkAll() === true) {
      this.result.disabled = false;
      this.result.style.color = 'black';
      this.result.value = this.hyperFormula();
    } else {
      this.result.style.color = 'red';
      this.result.value = 'Invalid Input';
    }
  }

  hyperFormula() {
    const temp1 = validate.Combination(this.k, this.x);
    const temp2 = validate.Combination((this.N - this.k), (this.n - this.x));
    const temp3 = validate.Combination(this.N, this.n);
    const temp4 = (temp1 * temp2) / temp3;
    return temp4;
  }

  checkX() {
    if (validate.checkIfValidInput(this.x) === true && validate.isDecimal === false) { // valid for X
      return true;
    }
    return false;
  }

  checkn() { // 1 means n is good, 2 means n!>=x, 3 means n is invalid
    if (validate.checkIfValidInput(this.n) === true && validate.isDecimal === false) {
      if (this.n >= this.x) {
        return 1;
      }
      return 2;
    }
    return 3;
  }

  checkN() {
    if (validate.checkIfValidInput(this.N) === true && validate.isDecimal === false) {
      if (this.N >= 1 && this.N >= this.n) {
        return 1;
      } if (this.N >= 1) {
        return 2; // N !>= n
      } return 3; // N!>= 1
    }
    return 4;
  }

  checkK() {
    if (validate.checkIfValidInput(this.k) === true && validate.isDecimal === false) {
      if (this.k <= this.N && this.k >= this.x) {
        return 1;
      }
      if (this.k <= this.N) {
        return 2; // K !>= x
      }
      return 3; // K !<= N
    }
    return 4;
  }

  checkAll() {
    if (this.n === -1 || this.x === -1 || this.N === -1 || this.k === -1) {
      this.result.style.color = 'red';
      this.result.value = 'Invalid Input';
      return false;
    }
    this.error1.value = '✔';
    this.error2.value = '✔';
    this.error3.value = '✔';
    this.error4.value = '✔';
    return true;
  }

  reset() {
    document.getElementById('x').value = '';
    document.getElementById('n').value = '';
    document.getElementById('N1').value = '';
    document.getElementById('K').value = '';
    this.error1.value = '';
    this.error2.value = '';
    this.error3.value = '';
    this.error4.value = '';
    this.result.value = '';
    this.k = -1;
    this.N = -1;
    this.n = -1;
    this.x = -1;
    this.result.disabled = true;
  }
}

function callHypergeometric(num, value, value2, value3, value4) {
  switch (num) {
    case 0:// on page load
      hypergeometric = new Hypergeometric(value, value2, value3, value4);
      break;
    case 1:// x
      hypergeometric.x = value;
      hypergeometric.verifyX();
      break;
    case 2:// n
      hypergeometric.n = value;
      hypergeometric.verifyn();
      break;
    case 3:// N
      hypergeometric.N = value;
      hypergeometric.verifyN();
      break;
    case 4:
      hypergeometric.k = value;
      hypergeometric.verifyk();
      break;
    case 'reset':// reset button
      hypergeometric.reset();
      break;
    case 'calculate':// result button
      hypergeometric.calculate();
      break;
    default:
      break;
  }
}
