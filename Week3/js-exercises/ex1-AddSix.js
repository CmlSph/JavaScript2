/**
 
 ** Exercise 1: Add Six **
 
Declare a function called `createBase`.The function takes a number as a parameter and
return a closure, that adds a number to the base number argument.

Call the function three times. The return values should be:
 15, 24, 33

 */

function createBase(number) {
  // Put here your logic...
  return function(){
        number = number + 9
        return number
    };
}

const addNine = createBase(6);

console.log(addNine());
console.log(addNine());
console.log(addNine());

// Put here your function calls...
