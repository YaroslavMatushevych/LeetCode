function maxProfit(prices: number[]): number {
    if (!prices.length) return 0;

    let bestBuy = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (bestBuy > prices[i]) {
            bestBuy = prices[i];
        }

        profit = Math.max(profit, prices[i] - bestBuy);
    };

    return profit;
};


function maxProfitDynamic(prices) {
    const memo = new Array(prices.length).fill(-1);
    return maxProfitHelper(prices, 0, Infinity, memo);
}

function maxProfitHelper(prices, currentIndex, minPrice, memo) {
    // Base case: if we have processed all days, return 0 profit
    if (currentIndex >= prices.length) {
        return 0;
    }

    // If the result for the current day is already calculated, return it
    if (memo[currentIndex] !== -1) {
        return memo[currentIndex];
    }

    // Update the minimum price seen so far
    minPrice = Math.min(minPrice, prices[currentIndex]);

    // Calculate profit if we sell on the current day
    const profitToday = prices[currentIndex] - minPrice;

    // Recursively calculate the maximum profit from the next day onwards
    const futureProfit = maxProfitHelper(prices, currentIndex + 1, minPrice, memo);

    // The result for the current day is the maximum of selling today or in the future
    memo[currentIndex] = Math.max(profitToday, futureProfit);

    return Math.max(profitToday, futureProfit);
}

const prices1 = [7, 1, 5, 3, 6, 4];
const prices2 = [7, 6, 4, 3, 1];

console.log(maxProfit(prices1)); // Output: 5
console.log(maxProfit(prices2)); // Output: 0
