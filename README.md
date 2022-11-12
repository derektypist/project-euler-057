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

**User Stories**

As a user, I expect the function `squareRootConvergents(10)` to return a number.

As a user, I expect the function `squareRootConvergents(10)` to return 1.

As a user, I expect the function `squareRootConvergents(100)` to return 15.

As a user, I expect the function `squareRootConvergents(1000)` to return 153.

User Stories on function `squareRootConvergents(n)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 057](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-57-square-root-convergents)

**Information Architecture**

The function `squareRootConvergents(n)` returns a number, where `n` is a number between 10 and 10000.