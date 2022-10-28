//  Remove Duplicates from Sorted Array

// array of integers, sorted from low to high
// remove all duplicate integers but add '_' for each dup that is removed from the array and return next number in order array, 

// filter the nums array
// 0, 



//  @param {number[]} nums
//  @return {number}
 var removeDuplicates = function(nums) {
    let filteredArr = nums.filter((element, index, array) => index === array.indexOf(element))
    return filteredArr
};

console.log(removeDuplicates([1,1,2])) // [1,2]