/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor()
  {
    this.result=0;
  }
  is_Valid(s)
  {
    let regex=/\s+/g;
    s=s.replace(regex,"").trim();
    console.log(s);
    let regex2=/^[0-9\+\-\/\*\(\)\.]+$/
    if (!regex2.test(s))
    { 
      throw new Error("invalid string input");
    }
    return s;
  }

  add(num)
  {
    this.result+=num;
  }
  subtract(num)
  {
    this.result-=num;
  }
  multiply(num)
  {
    this.result*=num;
  }
  divide(num)
  {
    if (num===0)
    {
    throw new Error("div by zero");
    }
    else{
    this.result/=num;
    }
  }
  clear()
  {
    this.result=0;
  }
  calculate(expr)
  {
    let s=this.is_Valid(expr);
    if (eval(s)===Infinity)
    {
      throw new Error("div by zero");
    }
    else{
    try{
      this.result=eval(s);
    }
    catch(error)
    {
      throw new Error("invalid string to evaluate");
    }
  }
  }
  getResult()
  {
    return this.result;
  }
}
calc=new Calculator();
// calc.div(0);
// calc.calculate("10/0");
let res=calc.getResult();
console.log(res);

module.exports = Calculator;
