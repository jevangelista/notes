//test suite

/**
funtion assert (ingredients, beautifulPizza, oven) {
	return beautiful Pizza === oveng(ingredients);
}
*/

function assert(input, output, testFunction) {
    return output === testFunction(input);
}

/** function for first

function first(day) {
	return day[0];
}
*/

function min () {

}


//test for min

console.log(assert)

/**
function for last



function last (day) {
	return day[2];
}

/** test for last
var weekDays = ["monday", "tuesday", "wednesday"];
console.log(assert(weekDays,"wednesday", last));
console.log(assert(weekDays,"tuesday", last));


var weekDays = ["thursday", "friday", "saturday"];
console.log(assert(weekDays, "saturday", last));
console.log(assert(weekDays, "friday", last));
*/



/** test for first

var weekDays = ["monday","tuesday","wednesday"];
console.log(assert(weekDays,"wednesday", first));



var weekDays = ["thursday", "friday", "saturday"];
console.log(assert(weekDays,"thursday", first));

*/


/**
Ilias Example

function mphToKph(mph) {
	return Math.round(mph * 1.61);
}

//test results 
console.log ("mphToKps passed?", assert(60,97, mphToKph), "output is:", mphToKph(60) );

console.log ("mphToKps passed?", assert(100,161, mphToKph), "output is: ", mphToKph(100) );

*/

