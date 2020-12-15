/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/



let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();

/*When resolving a variable, JavaScript starts at the innermost scope 
and searches outwards until it finds the variable (or object, function) 
it is looking for. JavaScript's firts instinct is to see if there is a variable 
as close to home as possible. In this example, it starts looking for an "a variable" 
within the innermost/nested function. Since it cannot find an "a variable" 
inside this scope, it goes one level up, to the parent function. 
Here it sees a = 12 and alerts 12. If there weren't a = 12 here, 
it would go one level up and alert the value of a = 10 which is currently 
in the global scope.*/