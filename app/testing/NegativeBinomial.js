describe('Test for Correctness', function () {
  describe('CLASS:  Negative Binomial', function () {
    const b = new NegativeBinomial();
    describe('Function:  checkX()', function () {
      it('when x=3.5, checkX() should return error 2 - x is decimal -- DISPLAY MESSAGE: Input must be valid Integer', function () {
        b.x = '3.5';
        this.slow(-1);
        chai.expect(b.checkX()).to.equal(2);
      });
      it('when x=0, checkX() should return error 1 - x is zero DISPLAY MESSAGE: x must be at least 1', function () {
        b.x = 0;
        this.slow(-1);
        chai.expect(b.checkX()).to.equal(1);
      });
      it('when x=7, checkX() should return 3 - x is valid -- DISPLAY MESSAGE: ✔', function () {
        b.x = 7;
        this.slow(-1);
        chai.expect(b.checkX()).to.equal(3);
      });
    });
    describe('Function:  checkK()', function () {
      it('when k=4.5, checkK() should return false - k is decimal -- DISPLAY MESSAGE: Input must be valid Integer', function () {
        b.k = '4.5';
        this.slow(-1);
        chai.expect(b.checkK()).to.be.false;
      });
      it('when k=0, checkK() should return true -- DISPLAY MESSAGE: ✔', function () {
        b.k = '0';
        this.slow(-1);
        chai.expect(b.checkK()).to.be.true;
      });
    });
    describe('Function:  checkP()', function () {
      it('when p=4, checkP() should return error 1 - p > 1', function () {
        b.p = 4;
        this.slow(-1);
        chai.expect(b.checkP()).to.equal(1);
      });
      it('when p=0.75, checkP() should return 3 - p is valid', function () {
        b.p = 0.75;
        this.slow(-1);
        chai.expect(b.checkP()).to.equal(3);
      });
    });
    describe('Function:  checkAll()', function () {
      it('when k=10, x=8, p=0.9, checkAll() should return false -- DISPLAY MESSAGE: k must be less than or equal x',
        function () {
          b.p = 0.9;
          b.k = 10;
          b.x = 8;
          this.slow(-1);
          chai.expect(b.checkK()).to.be.true;
          chai.expect(b.checkP()).to.equal(3);
          chai.expect(b.checkX()).to.equal(3);
          chai.expect(b.k < b.x).to.be.false;
        });
      it('when x=5.6, k=8, p=0.9, checkAll() should return false -- DISPLAY MESSAGE: Invalid Input', function () {
        b.p = 0.9;
        b.x = '5.6';
        b.k = 8;
        this.slow(-1);
        chai.expect(b.checkK()).to.be.true;
        chai.expect(b.checkX()).to.equal(2);
        b.x = -1;
        chai.expect(b.checkP()).to.equal(3);
        chai.expect(b.x !== -1).to.be.false;
      });
      it('when x=10, k=5, p=0.43, checkAll() should return true', function () {
        b.p = 0.43;
        b.x = 10;
        b.k = 5;
        this.slow(-1);
        chai.expect(b.checkK()).to.be.true;
        chai.expect(b.checkX()).to.equal(3);
        chai.expect(b.checkP()).to.equal(3);
        chai.expect(b.x >= b.k).to.be.true;
      });
    });
    describe('Function:  negativeBinomialFormula()', function () {
      it('when x=10, k=5, p=0.43, negativeBinomialFormula() should return 0.1114518037', function () {
        b.p = 0.43;
        b.k = 5;
        b.x = 10;
        this.slow(-1);
        chai.expect(b.negativeBinomialFormula().toFixed(10)).to.equal('0.1114518037');
      });
    });
  });
});