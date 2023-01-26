"use strict";

class Calculator {
  
  constructor(){
    this.ClassName = 'Calculator';
    this.Name = 'Calculator';
  }

  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    if (num2 === 0) return NaN;
    return num1 / num2;
  }

  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }

  calculate(cb) {
    if (typeof cb === 'function'){
      cb = cb.bind(this);
    }
    return new Promise(function(myResolve, myReject){
      if (typeof cb !== 'function'){
        myReject(NaN);
      }
      const ans = cb();
      myResolve(ans);
    })
  }
}


class ScientificCalculator extends Calculator{
  sin(radians){
    return Math.sin(radians);
  }

  cos(radians){
    return Math.cos(radians);
  }

  tan(radians){
    return Math.tan(radians);
  }

  log(radians){
    return Math.log(radians);
  }

  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }

}

function withSummation() {
  this["sum"] = (...args) => {
    return args.reduce((total, num) => total += num, 0)
  }
}

// Setup Mocha and Chai
// mocha.setup( "bdd" );
const expect = require('chai').expect;
const toString = Object.prototype.toString;

/**
 * 1. Writeculator class that matches this specification
 */
describe( "Calculator", function(){
  let calculator;

  beforeEach( function(){
    calculator = new Calculator();
  } );
 
  it( "adds 1 and 2", function(){
    expect( calculator.add( 1, 2 ) ).to.equal( 3 );
  } );
 
  it( "subtracts 2 from 9", function(){
    expect( calculator.subtract( 9, 2 ) ).to.equal( 7 );
  } );
 
  it( "multiplies 4 and 3", function(){
    expect( calculator.multiply( 4, 3 ) ).to.equal( 12 );
  } );
 
  it( "divides 10 by 2", function(){
    expect( calculator.divide( 10, 2 ) ).to.equal( 5 );
  } );
     
  it( "does not divide by 0", function(){
    expect( calculator.divide( 5, 0 ) ).to.be.NaN;
  } );
  
  it( "provides a string description", function (){
    expect( toString.call( calculator ) ).to.equal( "[object Calculator]" );
  } );
} );

/**
 * 2. Write a ScientificCalculator class that matches this specification
 */
describe( "ScientificCalculator", function(){
  let sciCalculator;

  beforeEach( function(){
    sciCalculator = new ScientificCalculator();
  } );
  
  it( "extends Calculator", function(){
    expect( sciCalculator ).to.be.instanceOf( Calculator );
    expect( sciCalculator ).to.be.instanceOf( ScientificCalculator );
  } );
  
  it( "does not modify Calculator", function(){
    const calculator = new Calculator();
    expect( calculator ).to.not.have.property( "sin" );
    expect( calculator ).to.not.have.property( "cos" );
    expect( calculator ).to.not.have.property( "tan" );
    expect( calculator ).to.not.have.property( "log" );
  } );
 
  it( "returns the sine of PI / 2", function(){
    expect( sciCalculator.sin( Math.PI / 2 ) ).to.equal( 1 );
  } );

  it( "returns the cosine of PI", function(){
    expect( sciCalculator.cos( Math.PI ) ).to.equal( -1 );
  } );
 
  it( "returns the tangent of 0", function(){
    expect( sciCalculator.tan( 0 ) ).to.equal( 0 );
  } );
 
  it( "returns the logarithm of 1", function(){
    expect( sciCalculator.log( 1 ) ).to.equal( 0 );
  } );
  
  it( "provides a string description", function(){
    expect( toString.call( sciCalculator ) ).to.equal( "[object ScientificCalculator]" );
  } );
} );

/**
 * 3. Write a withSummation functional mixin that matches this specification
 */
describe( "withSummation", function(){
  let calculator;

  beforeEach( function(){
    calculator = new Calculator();
  } );
  
  it( "should be a function", function(){
    expect( withSummation ).to.be.a( "function" );
  } );
 
  it( "returns the Σ of 1 through 4", function(){
    const anotherCalculator = new Calculator();
    
    expect( calculator ).to.not.have.property( "sum" );
    expect( anotherCalculator ).to.not.have.property( "sum" );
    
    withSummation.call( calculator );
    
    expect( calculator ).to.have.property( "sum" ).that.is.a( "function" );
    expect( anotherCalculator ).to.not.have.property( "sum" );
    expect( calculator.sum( 1, 2, 3, 4 ) ).to.equal( 10 );
  } );
} );

/**
 * 4. Add a calculate function to Calculator that matches this specification
 */
describe( "Calculator.calculate", function(){
  let calculator;

  beforeEach( function(){
    calculator = new Calculator();
  } );
  
  it( "returns a promise", function( done ){
    const
      callDone = () => done(),
      calculating = calculator.calculate( () => void 0 );
    expect( calculating ).to.be.instanceOf( Promise );
    calculating.then( callDone ).catch( callDone );
  } );
     
  it( "resolves with the result when the calculation succeeds", function( done ){
 
    const calculating = calculator.calculate(function(){
      expect( this ).to.equal( calculator );
      let result = 0;
      result += this.add( 1, 2 );
      result += this.add( 3, 4 );
      return result;
    });
    calculating
      .then( function( result ){
        expect( result ).to.equal( 10 );
        done();
      } )
      .catch( () => done() );
  } );
  
  it( "rejects with NaN when the calculation fails", function( done ){
    const calculating = calculator.calculate();
    calculating.catch( function( result ){
      expect( result ).to.be.NaN;
      done();
    } );
  } );
} );

/**
 * 5. Write an AsBusinessCalculator class mixin that matches this specification
 */
// describe( "AsBusinessCalculator", function(){
//   const
//       p = 100,// $100 in principle
//       t = 7;  // 7 years
//   let BusinessCalculator, bizCalculator;

//   beforeEach( function(){
//     BusinessCalculator = AsBusinessCalculator( Calculator );
//     bizCalculator = new BusinessCalculator();
//   } );
  
//   it( "should be a function", function(){
//     expect( AsBusinessCalculator ).to.be.a( "function" );
//   } );
  
//   it( "creates a class that extends Calculator", function(){
//     expect( bizCalculator ).to.be.instanceOf( Calculator );
//     expect( bizCalculator ).to.be.instanceOf( BusinessCalculator );
//   } );
  
//   it( "does not modify Calculator", function(){
//     const calculator = new Calculator();
//     expect( calculator ).to.not.have.property( "simpleInterest" );
//   } );
 
//   it( "creates a class with a function that returns the simple interest", function(){
//     let r;
//     expect( bizCalculator ).to.have.property( "simpleInterest" ).that.is.a( "function" );
//     r = 5.5;// 5.5% rate
//     expect( bizCalculator.simpleInterest( p, r, t ) ).to.equal( p * ( r / 100 ) * t );
//     r = 4.3;// 4.3% rate
//     expect( Number( bizCalculator.simpleInterest( p, r, t ).toFixed( 1 ) ) ).to.equal( 30.1 );
//   } );
  
//   it( "creates a class that provides a string description", function(){
//     expect( toString.call( bizCalculator ) ).to.equal( "[object BusinessCalculator]" );
//   } );
// } );

// Run the tests
// mocha.run();