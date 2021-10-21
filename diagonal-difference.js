const nums = 
  [[11, 2, 4],
   [4, 5, 6],
   [10, 8, -12]];

const diagonalDifference = (nums) => {
  let n = nums.length - 1;
  let firstDiagonal = 0;
  let secondDiagonal = 0;

  for(let i = 0; i < nums.length; i++) {
    firstDiagonal+= nums[i][i];
    secondDiagonal+= nums[i][n - i];
  }

  return Math.abs(firstDiagonal - secondDiagonal)
}

diagonalDifference(nums)