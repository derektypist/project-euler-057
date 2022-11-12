# Project Euler 057 - Square Root Convergents

It is possible to show that the square root of two can be expressed as an infinite continued fraction.

&radic; 2 = 1 + 1 / (2 + 1 + (2 + 1 / (2 + ...)))

By expanding this for the first four iterations, we get:

    1 + 1/2 = 3/2 = 1.5
    1 + 1 + (2+1/2) = 7/5 = 1.4
    1 + 1 + (2+1/(2+1/2)) = 17/12 = 1.41666...
    1 + 1 + (2+1/(2+1/(2+1/2))) = 41/29 = 1.41379...

The next three expansions are 99/70, 239/169, and 577/408, but the eighth expansion, 1393/985, is the first example where the number of digits in the numerator exceeds the number of digits in the denominator.

In the first n expansions, how many fractions contain a numerator with more digits than the denominator?

Information at [Project Euler 057](https://projecteuler.net/problem=57)

## UX

**Getting Started**

In the input field, enter a whole number between 10 and 10000 (without leading zeros such as 010) and select the Submit Button.  You will see the number entered as well as the number of fractions containing a numerator with more digits than the denominator, unless you have made an invalid input.  For example, if you entered and submitted 10, you would expect the result to be 1.  Select the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 10 or greater than 10000
- Including leading zeros such as 010
- Entering a number, but it is not an integer

As a user, if I selected the Reset Button, I can clear the information or start again.

As a user, I expect the function `squareRootConvergents(10)` to return a number.

As a user, I expect the function `squareRootConvergents(10)` to return 1.

As a user, I expect the function `squareRootConvergents(100)` to return 15.

As a user, I expect the function `squareRootConvergents(1000)` to return 153.

User Stories on function `squareRootConvergents(n)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 057](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-57-square-root-convergents)

**Information Architecture**

The function `squareRootConvergents(n)` returns a number, where `n` is a number between 10 and 10000.

## Features

Allows the user to enter the number in order to find the number of fractions containing a numerator with more digits than the denominator.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript with BigInt, Bootstrap 5.2.2 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-057) at the main branch.

## Credits

### Content

Square Root Symbol &radic; taken from [w3schools.com - HTML Symbols](https://www.w3schools.com/html/html_symbols.asp).

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)
- [w3schools.com](https://www.w3schools.com)