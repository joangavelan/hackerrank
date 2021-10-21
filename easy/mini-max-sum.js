const nums = [1, 3, 5, 7, 9];

const miniMaxSum = (nums) => {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const sum = nums.reduce((a, b) => a + b);
  const minSum = sum - max;
  const maxSum = sum - min;

  console.log(`${minSum} ${maxSum}`)
}

miniMaxSum(nums)

// function miniMaxSum(nums) {
//   nums.sort((a, b) => a - b)
//   const firstNum = nums[0];
//   const lastNum = nums[nums.length - 1];
//   const totalSum = nums.reduce((a, b) => a + b);
//   const minSum = totalSum - lastNum;
//   const maxSum = totalSum - firstNum;

//   console.log(`${minSum} ${maxSum}`)
// }