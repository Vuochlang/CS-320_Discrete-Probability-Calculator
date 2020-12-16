let geometric; // instance of Binomial class
let validate; // instance of ValidateInput class

class Geometric {
  constructor(a, b) {
    validate = new ValidateInput();
    this.x = -1;
    this.p = -1;
    this.error1 = a;
    this.error2 = b;
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

  verifyP() {
    switch (this.checkP()) {
      case 1: // when p is out of range
        this.p = -1;
        this.error2.style.color = 'red';
        this.error2.value = 'p must between 1 and 0';
        break;
      case 2: // when p is not valid
        this.p = -1;
        this.error2.style.color = 'red';
        this.error2.value = 'Input must be valid';
        break;
      default: // when p is valid
        this.p = parseFloat(this.p);
        this.error2.style.color = 'green';
        this.error2.value = '✔';
        break;
    }
  }

  calculate() {
    if (this.checkAll() === true) {
      this.result.disabled = false;
      this.result.style.color = 'black';
      this.result.value = this.geometricformula();
    } else {
      this.result.style.color = 'red';
      this.result.value = 'Invalid Input';
    }
  }

  geometricformula() {
    const temp1 = Math.pow((1 - this.p), (this.x - 1));
    const temp2 = (temp1 * this.p);
    return temp2;
  }

  checkX() {
    if (validate.checkIfValidInput(this.x) === true && validate.isDecimal === false) { // valid for X
      return true;
    }
    return false;
  }

  checkP() {
    if (validate.checkIfValidInput(this.p) === true) {
      if (this.p <= 1 && this.p >= 0) {
        return 3;}
      return 1;
    }
    return 2;
  }

  checkAll() {
    if (this.x === -1 || this.p === -1) {
      this.result.style.color = 'red';
      this.result.value = 'Invalid Input';
      return false;
    }
    this.error1.value = '✔';
    this.error2.value = '✔';
    return true;
  }

  reset() {
    document.getElementById('x').value = '';
    document.getElementById('p').value = '';
    this.error1.value = '';
    this.error2.value = '';
    this.result.value = '';
    this.p = -1;
    this.x = -1;
    this.result.disabled = true;
  }
}

function callGeometric(num, value, value2) {
  switch (num) {
    case 0:// on page load
      geometric = new Geometric(value, value2);
      break;
    case 1:// x
      geometric.x = value;
      geometric.verifyX();
      break;
    case 2:// n
      geometric.p = value;
      geometric.verifyP();
      break;
    case 'reset':// reset button
      geometric.reset();
      break;
    case 'calculate':// result button
      geometric.calculate();
      break;
    default:
      break;
  }
}

/*function callGeometric(num) {
    switch (num) {
        case 0:// on page load
            geometric = new Geometric();
            break;
        case 1:// x
            geometric.checkX();
            break;
        case 2:// n
            geometric.checkP();
            break;
        case 'reset':// reset button
            geometric.reset();
            break;
        case 'calculate':// result button
            geometric.calculate();
            break;
        default:
            break;
    }
}

class Geometric {
    constructor() {
        validate = new ValidateInput();
    }

    calculate() {
        if (this.checkAll() === true) {
            document.getElementById('result').disabled = false;
            const x = document.getElementById('x').value;
            const p = document.getElementById('p').value;
            const temp1 = Math.pow(1 - p, x-1);
          //  const temp2 = p;
            document.getElementById('result').value = (temp1 * p);
        } else {
            document.getElementById('result').value = 'Invalid Input';
        }
    }

    checkX() {
        const xValue = document.getElementById('x').value;
        const error = document.getElementById('error1');
        if (validate.checkIfValidInput(xValue) === true) { // valid for X
            error.style.color = 'green';
            error.value = '  ✔';
            return true;
        }
        error.style.color = 'red';
        error.value = '  Input must be valid';
        return false;
    }

    checkP() {
        const pValue = document.getElementById('p').value;
        const error = document.getElementById('error2');
        if (validate.checkIfValidInput(pValue) === true) {
            if (this.checkPValue() === true) {
                error.style.color = 'green';
                error.value = '✔';
                return true;
            }
            error.style.color = 'red';
            error.value = '  p must between 1 and 0';
            return false;
        }
        error.style.color = 'red';
        error.value = '  Input must be valid';
        return false;
    }

    checkPValue() {
        const p = document.getElementById('p').value;
        return !(p > 1 || p < 0);
    }

    checkAll() {
        if (this.checkX() === true && this.checkP() === true) {
            if (this.checkPValue() === true) {
                return true;
            }
        }
        return false;
    }
    reset() {
        document.getElementById('x').value = '0';
        document.getElementById('p').value = '0';
        document.getElementById('error1').value = '';
        document.getElementById('error2').value = '';
        document.getElementById('result').value = '';
    }
}
*/
