class Binomial{
    constructor(x,n,p){
        this.x=x;//number of successes
        this.n=n;//independent trials,
        this.p=p;//probability of success
    }
    result(){
        let v1=Combination(this.n,this.x);
        let v2=Math.pow(this.p,this.x);
        let v3=Math.pow(1-this.p,this.n-this.x);
        return v1*v2*v3;
    }
}


class Hypergeometric{
    constructor(x,N,n,k) {
        this.x=x;//Number of successes in sample
        this.N=N;//Population size
        this.n=n;//Sample size
        this.k=k;//Number of successes in population
    }
    result(){
        let v1=Combination(this.k,this.x);
        let v2=Combination(this.N-this.k,this.n-this.x);
        let v3=Combination(this.N,this.n);
        return((v1*v2)/v3);
    }
}

class Negative_Binomial{
    constructor(x,k,p){
        this.x=x;//Number of trials
        this.k=k;//Number of successes
        this.p=p;//Probability of success on a trial
    }
    result(){
        let v1=Combination(this.x-1,this.k-1);
        let v2=Math.pow(this.p,this.k);
        let v3=Math.pow(1-this.p,this.x-this.k);
        return v1*v2*v3;
    }
}

class Poisson{
    constructor(x,l){
        this.x=x;//Poisson random variable (x)
        this.l=l;//average of l outcomes per unit of time
    }
    result(){
        let v1=Math.pow(Math.E,-this.l);
        let v2=Math.pow(this.l,this.x);
        let v3=Factorial(this.x);
        return v1*(v2/v3);
    }
}

class Geometric{
    constructor(x,p){
        this.x=x;//Geometric random variable (x)
        this.p=p;//probability of success
    }
    result(){
        let v1=Math.pow(1-this.p,this.x-1);
        return this.p*v1;
    }
}

function Combination(n,r){
    let top=Factorial(n);//nominator
    let bottom=Factorial(r)*Factorial(n-r);//denominator
    return top/bottom;
}

function Factorial(n){
    if (n===0)  return 1;
    else return n*Factorial(n-1);
}



let b=new Binomial(4,5,0.2);
console.log(b.result());

let h=new Hypergeometric(2,10,4,6);
console.log(h.result());

let n=new Negative_Binomial(10,5,0.1);
console.log("P(X="+5+")"+n.result());

let p=new Poisson(10,5);
console.log(p.result());

let g=new Geometric(10,0.02);
console.log("P(X="+5+")"+g.result());
