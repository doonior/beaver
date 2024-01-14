function candy(ratings: number[]): number {
  const candies = [1];
  let updatePointer = 0;

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] === ratings[i - 1]) {
      candies[i] = 1;
      updatePointer = i;
    } else if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
      updatePointer = i;
    } else {
      candies[i] = 1;
      for (let j = i - 1; j >= updatePointer; j--) {
        if (candies[j] === candies[j + 1]) {
          candies[j] += 1;
        }
      }
    }
  }

  return candies.reduce((a, b) => a + b);
}
