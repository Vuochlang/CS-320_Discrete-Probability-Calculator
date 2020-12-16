describe('Test for Correctness', function () {
  describe ('CLASS: Geometric', function () {
    const temp = new Geometric();
    describe('Function:  checkX()', function () {
      it('when input is 2.63, checkX should return false since it must be a decimal number', function () {
        this.slow(0);
        temp.x = '2.63';
        chai.expect(temp.checkX()).to.be.false;
      });
      it('when x=20, checkIfValidInput should return true', function () {
        temp.x = '20';
        this.slow(0);
        chai.expect(temp.checkX()).to.be.true;
      });
    });
  describe('Function:  checkP()', function () {
    it('when p=10, checkP() should return 1(the false value of not being a decimal', function () {
      temp.p = 10;
      this.slow(0);
      chai.expect(temp.checkP()).to.equal(1);
    });
    it('when p=rh43, checkP() should return 2( the false value of not being a valid number', function () {
      temp.p = 'rh43';
      this.slow(0);
      chai.expect(temp.checkP()).to.equal(2);
    });
    it('when p=0.5, checkP() should return 3( the true value)', function () {
      temp.p = 0.5;
      this.slow(0);
      chai.expect(temp.checkP()).to.equal(3);
    });
  });

    describe('Function; geometricFormula()', function () {
      it('when x=5, p = 0.5, the result should be 0.03125', function () {
        temp.x = '5';
        temp.p = '0.5';
        this.slow(0);
        chai.expect(temp.geometricformula()).to.equal(0.03125);
      });
    });
  });
});
