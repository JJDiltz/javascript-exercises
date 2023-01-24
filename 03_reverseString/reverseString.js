const reverseString = function(string) {
    let str = string.split('')
    let reverse = str.reverse();
    let joined = reverse.join('')
    return joined;
    
};

// Do not edit below this line
module.exports = reverseString;
