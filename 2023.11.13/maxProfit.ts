function maxProfit(prices: number[]): number {
  let prev = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prev) {
      profit += prices[i] - prev;
    }
    prev = prices[i];
  }

  return profit;
}
