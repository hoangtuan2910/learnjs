var nums = [5,1,2,1,2];

var singleNumber = function(nums) {
    var result = nums[0];
    for(var i = 1; i < nums.length; i++) {
        result = result^nums[i];
    }
    return result;
};

console.log(singleNumber(nums));