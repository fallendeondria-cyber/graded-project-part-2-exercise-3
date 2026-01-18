// --------------------------------------------------
// Step 1
// Generate a decimal number between 0 (inclusive) and 1 (exclusive)
const randomDecimal = Math.random();

// --------------------------------------------------
// Step 2
// Determine the desired range of numbers (3 to 33 inclusive)
const range = 33 - 3 + 1; // 31

// --------------------------------------------------
// Question 1
// Why did we add 1 to the difference between 33 and 3?
// Answer:
// We add 1 to include both endpoints (3 and 33) in the range,
// giving us a total of 31 possible values.

// --------------------------------------------------
// Step 3
// Adjust the random decimal to fit within the desired range
const randomInRange = randomDecimal * range;

// --------------------------------------------------
// Question 2
// How does multiplying randomDecimal by range help?
// Answer:
// randomDecimal is between 0 and 1. Multiplying it by range
// scales the value to be between 0 and range (exclusive).

// --------------------------------------------------
// Step 4
// Round down the decimal number to get a whole integer
const randomInt = Math.floor(randomInRange);

// --------------------------------------------------
// Question 3
// Why use Math.floor() instead of Math.round()?
// Answer:
// Math.floor() always rounds down, ensuring the value stays
// within the expected range. Math.round() could round up and
// exceed the maximum allowed value.

// --------------------------------------------------
// Step 5
// Adjust the integer to fit within the range of 3 to 33
const shiftValue = randomInt + 3;

// --------------------------------------------------
// Question 4
// How does adding 3 ensure shiftValue is between 3 and 33?
// Answer:
// randomInt ranges from 0 to 30. Adding 3 shifts that range
// upward to 3 through 33 inclusive.
