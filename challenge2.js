const array = ["a", 10, "b", "hello", 122, 15];

function filterLettersAndNumbers(arr) {
  const letters = arr.filter(e => typeof e === 'string' && /[a-zA-Z]/.test(e));
  const numbers = arr.filter(e => typeof e === 'number');

  return [letters, numbers];
}

function findLargestNumber(numbers) {
  if (numbers.length === 0) {
    return "No numbers found."
  }

  return Math.max(...numbers);
}

const [letters, numbers] = filterLettersAndNumbers(array);

const largestNumber = findLargestNumber(numbers);

console.log("Letters array:", letters);
console.log("Numbers array:", numbers);
console.log("Largest number in array:", largestNumber);
