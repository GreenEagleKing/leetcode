//  find the length of the longest substring without repeating characters.

// string of characters, english, number, symbols and spaces
// number

// loop through string
// if current char + 1 is not the same add to count array
// if current char is the same as any of the previous chars start a new array item
// e.g. let countArr = [3,3,1]

var lengthOfLongestSubstring = function(s) {
    let countArr = []
    let count = 0
};

console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring("pwwkew")) // 3

//Answer
var lengthOfLongestSubstring = function(s) {
    let max_len = 0;
    let curr = 0;
    let hash = {}; 
    if(s.length < 2) {
        return s.length;
    }
    for(let i = 0; i < s.length;  i++) {
        if(hash[s[i]] == null) {
            curr += 1;
        } else {
            curr = Math.min(i - hash[s[i]], curr + 1);
        }
        max_len = Math.max(max_len, curr);
        hash[s[i]] = i; //save the index
    }
    return max_len;
};