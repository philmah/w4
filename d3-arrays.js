

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    let a;
    let n=nums.length;
    for (let i=0; i<n; ++i){
      for (let j=i+1; j<n; ++j){
         if (nums[i] < nums[j]){
            a = nums[i];
            nums[i] = nums[j];
            nums[j] = a;
         }
      }
    }
    for(let o=0;o<n;o++){
        if(nums[o]!=nums[0]&&nums[o]<nums[0]){
            return nums[o];
        }
    }
    // Complete the function
}
