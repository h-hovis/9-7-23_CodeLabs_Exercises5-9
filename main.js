// Exercise 5
// Design a function that accepts a parameter.
// The function should return another function that uses the parameter in some way.
// function functionFactory(greeting) {
//     return function(name) {
//         console.log(greeting + ', ' + name);
//     }
// }

// let sayHi = functionFactory('Hi');

// Exercise 5 complete

// Exercise 6
// Declare a variable after a console.log statement that tries to print that variable. Observe the behavior, and deduce how JavaScript hoists variable declarations.

// function hoistingTest() {
//     console.log('The value of x is: ' + x);
//     let x = 5;
// }

// hoistingTest();
// Returns an uncaught reference error because the variable is not defined before the console.log statement.

// Exercise 6 complete

// Exercise 7

// Create a function that sets up a counter using closures.
// The outer function should define a count variable.
// The inner function should increment and print the count each time it's invoked.

// function counter() {
//     let count = 0;

//     return function() {
//         return count++;
//     };
// }

// let count = counter();

// alert(count());
// alert(count());
// alert(count());

// Exercise 7 complete

// Exercise 8

// Create a function that initializes a counter variable. This function should return another function.
// The returned function, when invoked, should increment the counter and print its value. However, if the counter reaches a certain value (e.g., 10), it should reset itself.
// Notice how hoisting affects the behavior when you try to declare and intialize the counter after referencing it.

// function counter() {
//     let count = 0;

//     return function() {
//         if (count <= 10) {
//             return count++;
//         } else {
//             return count = 0;
//         }
//     };
// }

// let count = counter();

// alert(count());
// alert(count());
// alert(count());
// alert(count());

// I'm not sure if I did this correctly. It only works if I set up an alert for each time the function is invoked. If I try to just call the funtion, nothing shows in the console.

// Exercise 8 complete