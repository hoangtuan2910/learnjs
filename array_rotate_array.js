var nums = [1,2,3,4,5,6,7], k = 3;

var rotate = function(nums, k) {
    let oldArr = nums.slice();
    for (let i = 0; i < nums.length;i++){
        nums[(i+k)%nums.length] = oldArr[(i)];
    }
    return nums;
};

console.log(rotate(nums,k));