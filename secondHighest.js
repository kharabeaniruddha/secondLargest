const arr = [6, 13, 22, 18, 0, 3, 45, 57, 5, 12];

function getSecondLargest(arr) {
  // validation of input array

  if (arr.length < 2) {
    return "Array should be have more than 1 element";
  }

  const { secondLargest } = arr.reduce(
    (acc, currentNum) => {
      if (currentNum > acc.largest) {
        // if current number is largest than previous item of array then
        // update largest and secondLarget number
        acc.secondLargest = acc.largest;
        acc.largest = currentNum;
      } else if (currentNum > acc.secondLargest && currentNum < acc.largest) {
        // if current number is larger than secondLarger but smaller than largest number then
        // update secondLarget number
        acc.secondLargest = currentNum;
      }

      return acc;
    },
    { largest: -Infinity, secondLargest: -Infinity }
  );

  // validation of secondLargest and returning the response

  return secondLargest === -Infinity
    ? "All the numbers within array are same"
    : secondLargest;
}

console.log(getSecondLargest(arr));
