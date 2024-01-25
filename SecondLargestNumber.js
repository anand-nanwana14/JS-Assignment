function secondLargest(array) {
  if (array.length < 2) {
      return "Array should have at least two elements";
  }
  let Largest = Math.max(array[0], array[1]);
  let secondLargest = Math.min(array[0], array[1]);

  for (let i = 2; i < array.length; i++) {
      if (array[i] > Largest) {
          secondLargest = Largest;
          Largest = array[i];
      } else if (array[i] > secondLargest && array[i] !== Largest) {
          secondLargest = array[i];
      }
  }

  return secondLargest;
}

const numbers = [15, 2, 8, 9, 1, 7];
const result = secondLargest(numbers);
console.log(result);


// 2nd Approach
// function secondLargest(array) {
//   if (array.length < 2) {
//     return "Array should have at least two numbers";
//   }
//   const sortedNumbers = array.sort((a, b) => b - a);

//   return sortedNumbers[1];
// }

// const result = secondLargest(arr);
// console.log(result);
