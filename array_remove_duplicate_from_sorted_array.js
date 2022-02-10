// var nums = [1,1,2];
var nums = [0,0,1,1,1,2,2,3,3,4];

var removeDuplicates = function(nums) {
    let start = 0     //O(1)
    for(i=0;i<nums.length;i++){   //O(n)
        if(nums[i] != nums[i+1]){
            nums[start] = nums[i]
            start++
        }
    }
    return start
};

console.log(removeDuplicates(nums)); 