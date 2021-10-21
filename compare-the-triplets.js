const compareTheTriplets = (a, b) => {
  let alice = 0;
  let bob = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      alice++;
    } else if (b[i] > a[i]) {
      bob++;
    } else {
      continue;
    }
  }
  return [alice, bob];
};

const a = [17, 28, 30];
const b = [99, 16, 8];

console.log(compareTheTriplets(a, b));
