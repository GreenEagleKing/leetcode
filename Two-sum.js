// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.

// return the indices that add up to the target

// num, array, will always be 2 nums, whole, positive, will always add up to target, one solution
// array of nums, can be in any order, e.g. [0,1] / [1,0]

// array[2,7,11,15], target 9 -> [0,1] // because 2+7 is 9
// array[3,2,4], target 6 -> [1,2] // because 2+4 is 6




var twoSum = function(array, target) {
    //for loop for outer number
    for(let i = 0; i <= array.length; i++) {
        //for loop internal number
        for(let k = 1; k <= array.length; k++) {
            console.log(array[i], array[k])
            if(array[i] + array[k] === target && i !== k) {
                return [i, k]
            }
        }
    }
};

twoSum([3,2,4], 6) // [1,2]
twoSum([2,7,11,15], 9) // [0,1]

// Success but timelimit exceeded - need to use a hashmap
