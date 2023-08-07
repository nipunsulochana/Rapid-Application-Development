// Function that takes two numbers as input and returns their sum
function getSum(num1, num2){
    return num1 + num2;
}

const sum = getSum(5, 7);
console.log(`The sum is ${sum}\n`);

// Array of numbers
const Numbers = [10, 12, 56, 78, 96, 45, 13, 5, 7, 82];

// Print the square of each number
for(let i=0; i<Numbers.length; i++){
    const square = Numbers[i]*Numbers[i];
    console.log(`The square of ${Numbers[i]} is ${square}`);
}

// Find the maximum and the minimum number in the array
const maximum = Math.max(...Numbers);
const minimum = Math.min(...Numbers);
console.log(`\nThe Maximum number is ${maximum} \nThe Minimum number is ${minimum}\n`);

// Function that takes a positive integer as input and returns its factorial
function fact(num){
    if(num <=0){
        return 1;
    }
    else{
        return num*fact(num-1);
    }
}

console.log(`The factorial of 5 is ${fact(5)}\n`);

// Reads a JSON file, parses its content, and displays the values of properties
const fs = require('fs');

const fileName = 'data.json';

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file ${fileName}: ${err}`);
  } 
  else {
    try {
      const jsonData = JSON.parse(data);
      console.log(`\nName: ${jsonData.name}`);
      console.log(`Age: ${jsonData.age}`);
    } catch (parseError) {
      console.error(`Error parsing JSON data: ${parseError}`);
    }
  }
});

// Function that takes a string as input and prints its reverse to the console
function reverse(word) {
    const a = word.split('');
    const b = a.reverse();
    const c = b.join('');
    return a;

}

console.log(`The reverse of word \"Hello\" is ${reverse("Hello")}`);



