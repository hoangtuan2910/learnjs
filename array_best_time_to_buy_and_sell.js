var prices = [7,1,5,3,6,4];

var maxProfit = function(prices) {
    let maxProfit = 0;
   
   for(let i = 0; i < prices.length; i++) {
     if (prices[i] > prices[i - 1]) {
       maxProfit += prices[i] - prices[i - 1];
     }
   }
   
   return maxProfit;
 };

 console.log(maxProfit(prices));