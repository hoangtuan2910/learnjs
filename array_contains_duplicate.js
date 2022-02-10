var nums = [1,1,1,3,3,4,3,2,4,2];

var containsDuplicate = function(nums) {
    nums.sort();
    for(i=0; i<nums.length-1; i++){
        if(nums[i] == nums[i+1])
            return true;
    }
    return false;
};

console.log(containsDuplicate(nums));