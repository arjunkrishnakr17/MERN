/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let max1=numbers[0];
    for (let i=0;i<numbers.length;i++)
    {
        if (numbers[i]>max1)
        {
            max1=numbers[i];
        }
    }
    return max1;
    
}

module.exports = findLargestElement;