describe('Test for Correctness', function () {
  describe('CLASS:  Hypergeometric', function () {
    const temp = new Hypergeometric();
    describe('Function:  checkX()', function () {
      it('when input is 2.63, checkX should return false since it must be a decimal number', function () {
        this.slow(0);
        temp.x = '2.63';
        chai.expect(temp.checkX()).to.be.false;
      });
      it('when x=20, checkX() should return true', function () {
        temp.x = '20';
        this.slow(0);
        chai.expect(temp.checkX()).to.be.true;
      });
    });

    describe('Function: checkn()', function () {
      it('when n is 1.2, checkn should return 3(the false value for not being an integer) because in hypergeometric, n cannot be decimal', function () {
        temp.n = '1.2';
        this.slow(0);
        chai.expect(temp.checkn()).to.equal(3);
      });
      it('when n is 0, checkn should return 2(the false value for n !>= x)', function () {
        temp.n = 0;
        this.slow(0);
        chai.expect(temp.checkn()).to.equal(2);
      });
      it('when n is 21, checkn should return 1(the true value for n is integer and >= x) ', function () {
        temp.n = '21';
        this.slow(0);
        chai.expect(temp.checkn()).to.equal(1);
      })
    });

    describe('Function: checkN()', function () {
      it('when N is 1.2, checkN should return 4(the false value for not being an integer)', function () {
        temp.N = '1.2';
        this.slow(0);
        chai.expect(temp.checkN()).to.equal(4);
      });
      it('when N is 0, checkN should return 3(the false value for N >= n but N !>=1 )', function () {
        temp.n = '-1';
        temp.N = '0';
        this.slow(0);
        chai.expect(temp.checkN()).to.equal(3);
      });
      it('when N is 2, checkN should return 2(the false value for N >=1 but N !>= n', function () {
        temp.n = '21';
        temp.N = '2';
        this.slow(0);
        chai.expect(temp.checkN()).to.equal(2);
      });
      it('when N is 30, checkN should return 1(the true value)', function () {
        temp.N = '30';
        this.slow(0);
        chai.expect(temp.checkN()).to.equal(1);
      });
    });

    describe('Function: checkK()', function () {
      it('when k is 1.2, checkK should return 4(the false value for not being an integer)', function () {
        temp.k = '1.2';
        this.slow(0);
        chai.expect(temp.checkK()).to.equal(4);
      });
      it('when k is 31, checkK should return 3(the false value for k >= x but k !<= N', function () {
        temp.k = '31';
        this.slow(0);
        chai.expect(temp.checkK()).to.equal(3);
    });
      it('when k is 19, checkK should return 2(the false value for k <= N but k !>= x', function () {
        temp.k = '19';
        this.slow(0);
        chai.expect(temp.checkK()).to.equal(2);
      });
      it('when k is 21, checkK should return 1 ', function () {
        temp.k = '21';
        this.slow(0);
        chai.expect(temp.checkK()).to.equal(1);
      });
    });

    describe('Function; hyperFormula()', function () {
      it('when x=5, n=15, N=20, k=10, the result should be 0.016253869969040248', function () {
        temp.x = '5';
        temp.n = '15';
        temp.N = '20';
        temp.k = '10';
        this.slow(0);
        chai.expect(temp.hyperFormula()).to.equal(0.016253869969040248);
      });
    });

  });
});
