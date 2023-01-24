const leapYears = function(year) {
    return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
    // let leapYear = true;
    // if (num % 400 === 0) {
    //     leapYear = true;
    // } else if (num % 100 === 0 || num % 4 === 1) {
    //     leapYear = false;
    // } else if (num % 4 === 0) {
    //     leapYear = true;
    // }
    // return leapYear;
};

// Do not edit below this line
module.exports = leapYears;
