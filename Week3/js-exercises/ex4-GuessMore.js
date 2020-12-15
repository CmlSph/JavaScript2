/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

/*The f1 function takes one parameter (val) and adds 1 to it and returns it. 
f1(x) will not show anything, we need to write console.log(f1(x)) to be able to
see the outcome of f1() function. In this case we are going to see 10. 
console.log(x); will only log the current value of x, which is 9.  

The f2() function takes an object as parameter. Here, we are increasing the value
of object y by 1. Unlike the f1() function, any changes in this function f2() 
will effect the original object ({ x: 9 }). So the outcome will be "{x: 10}". 
Everytime we call the f2(y) function and console.log(y) the value of the object y 
will increase by 1*/