// Class: Poisson

describe('Test for Correctness and Performance', function () {
  describe('CLASS:  Poisson', function () {
    callPoissonInit()
    describe('Function: callPoissonInit() - creates poissonModel, poissonView, poissonController Objects', function () {
      it('Check if the Object poissionModel was created', function () {
        this.slow(-1);
        chai.expect(poissonModel).to.be.an('object');
      });
      it('Check if the Object poissionView was created', function () {
        this.slow(-1);
        chai.expect(poissonView).to.be.an('object');
      });
      it('Check if the Object poissionController was created', function () {
        this.slow(-1);
        chai.expect(poissonController).to.be.an('object');
      });
    });
    describe('Function: poissonController - testing validation for x (must be an positive Integer greater than 0)', function () {
      it('poissonController.validateInputX(0) - value x = 0 should return false ', function () {
        this.slow(-1);
        chai.expect(poissonController.validateInputX(0)).to.be.false;
      });
      it('poissonController.validateInputX(0.5) - value x = 0.5 should return false ', function () {
        this.slow(-1);
        chai.expect(poissonController.validateInputX(0.5)).to.be.false;
      });
      it('poissonController.validateInputX(-2) - value x = -2 should return false ', function () {
        this.slow(-1);
        chai.expect(poissonController.validateInputX(-2)).to.be.false;
      });
      it('poissonController.validateInputX(1) - value x = 1 should return true ', function () {
        this.slow(-1);
        chai.expect(poissonController.validateInputX(1)).to.be.true;
      });
      it('poissonController.validateInputX(170) - value x = 170 should return true ', function () {
        this.slow(-1);
        chai.expect(poissonController.validateInputX(170)).to.be.true;
      });
      it('poissonController.validateInputX(171) - value x = 171 should return false ', function () {
        this.slow(-1);
        chai.expect(poissonController.validateInputX(171)).to.be.false;
      });
    });
    describe('Function: poissonController - testing validation for Lambda (must be an positive Real Number greater than 0)', function () {
      it('poissonController.validateInputLambda(0) - value lambda = 0 should return false ', function () {
        this.slow(-1);
        chai.expect(poissonController.validateInputLambda(0)).to.be.false;
      });
      it('poissonController.validateInputLambda(0.5) - value lambda = 0.5 should return true ', function () {
        this.slow(-1);
        chai.expect(poissonController.validateInputLambda(0.5)).to.be.true;
      });
      it('poissonController.validateInputLambda(1.0) - value lambda = 1.0 should return true ', function () {
        this.slow(-1);
        chai.expect(poissonController.validateInputLambda(1.0)).to.be.true;
      });
      it('poissonController.validateInputLambda(-0.5) - value lambda = -0.5 should return false ', function () {
        this.slow(-1);
        chai.expect(poissonController.validateInputLambda(-0.5)).to.be.false;
      });
      it('poissonController.validateInputLambda(745.1) - value lambda = 745.1 should return false ', function () {
        this.slow(-1);
        chai.expect(poissonController.validateInputLambda(745.1)).to.be.false;
      });
      it('poissonController.validateInputLambda(745) - value lambda = 745 should return true ', function () {
        this.slow(-1);
        chai.expect(poissonController.validateInputLambda(745)).to.be.true;
      });
    });
    describe('Function: poissonView - testing view will resolve true or false based on Controller response', function () {
      it('poissonView.updateXInput(true) - should return true ', function () {
        this.slow(-1);
        chai.expect(poissonView.updateXInput(true)).to.be.true;
      });
      it('poissonView.updateXInput(false) - should return false ', function () {
        this.slow(-1);
        chai.expect(poissonView.updateXInput(false)).to.be.false;
      });
      it('poissonView.updateLambdaInput(true) - should return true ', function () {
        this.slow(-1);
        chai.expect(poissonView.updateLambdaInput(true)).to.be.true;
      });
      it('poissonView.updateLambdaInput(false) - should return false ', function () {
        this.slow(-1);
        chai.expect(poissonView.updateLambdaInput(false)).to.be.false;
      });
    });
    describe('Function: poissonModel - testing Model will result in the correct answer', function () {
      it('poissonModel.calculate(1,5) - should return probability 0.033689734995427344 ', function () {
        this.slow(-1);
        chai.expect(poissonModel.calculate(1,5)).to.equal(0.033689734995427344);
      });
      it('poissonModel.calculate(5,1) - should return probability 0.0030656620097620196 ', function () {
        this.slow(-1);
        chai.expect(poissonModel.calculate(5,1)).to.equal(0.0030656620097620196);
      });
      it('poissonModel.calculate(5,5) - should return probability 0.17546736976785074', function () {
        this.slow(-1);
        chai.expect(poissonModel.calculate(5,5)).to.equal(0.17546736976785074);
      });
    });
    describe('Function: poissonModel - testing Model factorial', function () {
      it('poissonModel.factorial(0) - should return probability 1 ', function () {
        this.slow(-1);
        chai.expect(poissonModel.factorial(0)).to.equal(1);
      });
      it('poissonModel.factorial(1) - should return probability 1 ', function () {
        this.slow(-1);
        chai.expect(poissonModel.factorial(1)).to.equal(1);
      });
      it('poissonModel.factorial(10) - should return probability 3628800 ', function () {
        this.slow(-1);
        chai.expect(poissonModel.factorial(10)).to.equal(3628800);
      });
    });
  });
});
