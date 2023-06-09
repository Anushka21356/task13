// Solution 1: Print name and address
console.log("Name: Your Name");
console.log("Address: Your Address");

// Solution 2: Check value and data-type of two variables
function checkVariables(a, b) {
  if (a === b && typeof a === typeof b) {
    console.log("The value and data-type of both variables are the same.");
  } else {
    console.log("The value and/or data-type of the variables are different.");
  }
}

checkVariables(5, 5);
checkVariables("Hello", 7);

// Solution 3: Add two strings and return them in all capital letters
function addAndConvertToUpperCase(str1, str2) {
  return (str1 + str2).toUpperCase();
}

console.log(addAndConvertToUpperCase("Hello", "World"));

// Solution 4: Convert the length of a given string to bytes
function convertToBytes(str) {
  const bytes = new Blob([str]).size;
  return bytes;
}

console.log(convertToBytes("Hello World"));

// Solution 5: Round a number to a specified amount of digits
function roundToDigits(num, digits) {
  const factor = 10 ** digits;
  return Math.round(num * factor) / factor;
}

console.log(roundToDigits(3.14159, 2));