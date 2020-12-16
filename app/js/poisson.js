let poissonView; // instance of Poisson View class - using Model View Control design
let poissonController; // instance of Poisson Controller class - using Model View Control design
let poissonModel; // instance of Poisson Model class - using Model View Control design

/**
 *Function: callPoissonInit- create an instance for each class Model, View, Control
 * */
function callPoissonInit() {
  poissonView = new PoissonView();
  poissonController = new PoissonController();
  poissonModel = new PoissonModel();
}

/**
 *Class: Poisson View - this will be an observer and update when the model updates
 *consists of:
 * */
class PoissonView {
  constructor() {
  }

  inputChangeX() {
    const x = document.getElementById('x').value;
    poissonController.validateInputX(x);
    document.getElementById('result').value = '';
  }

  inputChangeLambda() {
    const lambda = document.getElementById('lambda').value;
    poissonController.validateInputLambda(lambda);
    document.getElementById('result').value = '';
  }

  updateXInput(isXInputTrue) {
    const error1 = document.getElementById('error1');
    if(isXInputTrue === true) {
      error1.style.color = 'green';
      error1.value = '  ✔';
      return true;
    }
    else {
      error1.style.color = 'red';
      error1.value = '  x must be integer, 0 < x ≤ 170';
      return false;
    }
  }

  updateLambdaInput(isLambdaInputTrue) {
    const error2 = document.getElementById('error2');
    if(isLambdaInputTrue === true) {
      error2.style.color = 'green';
      error2.value = '  ✔';
      return true;
    }
    else {
      error2.style.color = 'red';
      error2.value = ' λ must be rational num 0 < λ ≤ 745';
      return false;
    }
  }

  calculate() {
    const x = document.getElementById('x').value;
    const lambda = document.getElementById('lambda').value;
    if (x.toString().length > 0 && lambda.toString().length > 0) {
      let xCheckValid = poissonController.validateInputX(x);
      let lambdaCheckValid = poissonController.validateInputLambda(lambda);
      if(xCheckValid === true && lambdaCheckValid === true) {
        let probabilityAns = poissonController.calculate(x, lambda);
        document.getElementById('result').style.color = 'black';
        document.getElementById('result').value = probabilityAns;
      }
      else {
        document.getElementById('result').style.color = 'red';
        document.getElementById('result').value = 'Invalid Input';
      }
    }
    else {
      document.getElementById('result').style.color = 'red';
      document.getElementById('result').value = 'Invalid Input - missing value';
    }
  }

  /**
   * Function: reset() - reset the value of the input boxes to 0 and empty the value of error boxes
   * */
  reset() {
    document.getElementById('x').value = '';
    document.getElementById('lambda').value = '';
    document.getElementById('error1').value = '';
    document.getElementById('error2').value = '';
    document.getElementById('result').value = '';
  }
}

/**
 *Class: Poisson Controller - all methods that binomial will be needed
 * */
class PoissonController {
  constructor() {
  }

  validateInputX(x) {
    this.xInputVal = x.toString();
    for (let i = 0; i < this.xInputVal.length; i++) { // loop to run through each character of the input
      if (this.xInputVal.charCodeAt(i) < 48 || this.xInputVal.charCodeAt(i) > 57) {
        poissonView.updateXInput(false);
        return false;
      }
    }
    if(this.xInputVal.length > 0 && x > 0 && x < 171) {
      poissonView.updateXInput(true);
      return true;
    }
    else {
      poissonView.updateXInput(false);
      return false;
    }
  }

  validateInputLambda(lambda) {
    let decCount = 0;
    this.lambdaInputVal = lambda.toString();
    for (let i = 0; i < this.lambdaInputVal.length; i++) { // loop to run through each character of the input
      if ((this.lambdaInputVal.charCodeAt(i) < 48 || this.lambdaInputVal.charCodeAt(i) > 57) && this.lambdaInputVal.charCodeAt(i) !== 46) {
        poissonView.updateLambdaInput(false);
        return false;
      }
      if(this.lambdaInputVal.charCodeAt(i) === 46) {
        decCount++;
        if(decCount > 1) {
          poissonView.updateLambdaInput(false);
          return false;
        }
      }
    }
    if(this.lambdaInputVal.length > 0 && lambda > 0 && lambda < 745.00000001) {
      poissonView.updateLambdaInput(true);
      return true;
    }
    else {
      poissonView.updateLambdaInput(false);
      return false;
    }
  }

  calculate(x,lambda){
    let ans = poissonModel.calculate(x,lambda);
    return ans;
  }

}

class PoissonModel {
  constructor() {
  }

  calculate(x,lambda) {
    this.x=parseInt(x);
    this.lambda=parseFloat(lambda);
    this.negLambda = -1 * this.lambda;
    let numerator = (Math.pow(2.718281828459045235,this.negLambda))*(Math.pow(this.lambda,this.x));
    let denomiator = poissonModel.factorial(x);
    this.factDenom = parseInt(denomiator);
    let sum = numerator/this.factDenom;
    return (sum);
  }

  factorial(n) {
    if (n === 0) return 1;
    return n * this.factorial(n - 1);
  }
}
