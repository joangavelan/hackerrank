const nums = [-4, 3, -9, 0, 4, 1];

const plusMinus = (nums) => {
  let length = nums.length;
  let positives = 0;
  let negatives = 0;
  let zeroes = 0;

  for(let i = 0; i < length; i++) {
    if(nums[i] > 0) {
      positives++;
    } else if(nums[i] < 0) {
      negatives++;
    } else {
      zeroes++;
    }
  }

  console.log((positives / length).toFixed(6))
  console.log((negatives / length).toFixed(6))
  console.log((zeroes / length).toFixed(6))
}

plusMinus(nums)