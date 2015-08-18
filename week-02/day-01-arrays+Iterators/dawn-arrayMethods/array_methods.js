
/** Challenge 1 - forEach
var customers = ["Justin", "Ilias", "Nathan", "Camilo", "Vikash", "Adam", "Brianna", "Sarah", "Ali", "Jessie", "Cameron"];
  customers.forEach(callbackfn);
Justin: 2 minutes
   Ilias: 4 minutes
   Nathan: 6 minutes
   Camilo: 8 minutes
   Vikash: 10 minutes
   ...
   Cameron: 22 minutes


array.forEach(function callBack(element, index) {
    console.log(index + ". " + element); 
});


//my solution
customers.forEach(function callbackfn(element,index) {
    console.log(element + ": " + ((index + 1) * 2) + " minutes" ); 
});

var customers = ["Justin", "Ilias", "Nathan", "Camilo", "Vikash", "Adam", "Brianna", "Sarah", "Ali", "Jessie", "Cameron"];

//justin's solution
var waitTime = 2;
customerWaitTime = customers.forEach(function (element,index) {
	console.log(element + ": " + waitTime + " minutes");
	waitTime += 2;
});

*/



/**
Challenge 2 - Maps

Elaine the Etsy Merchant thinks her prices are scaring off customers. Subtracting one penny might help:

var prices = [3.00,4.00,10.00,2.25,3.01];
prices.map(callbackfn);
//[2.99, 3.99, 9.99, 2.24, 3.00]


var prices = [3.00,4.00,10.00,2.25,3.01];

var newPrice = prices.map(function (element){
	return element - 0.01;
});

console.log(newPrice);

*/

/** Challenge 2 - Maps - challenge 1
var prices = [3.00,4.00,10.00,2.25,3.01];

var newPrice = prices.map(function (element) {
	if (element % 1 === 0) {
		return element - 0.01;
	} else {
		return element;
	}
});

console.log(newPrice);
*/

/** Challenge 2 - Maps - challenge 2



var prices = [3.00,4.00,10.00,2.25,3.01];
var newPrice = prices.map(function (element) {
	return (element * 0.05) + element;
});

console.log(newPrice);
*/

/** Challenge 3 - Filter

Independently write a filter array function that creates an array for either odd or even birth dates.

var birthDates = [1, 1, 2, 4, 7, 4, 12, 30,...];
birthdates.filter(callbackfn);
evenBirthdates = [2, 4, 4, 12, 30];



var birthDates = [1, 6, 2, 15, 31, 8, 3, 8, 6, 10, 20, 3, 10, 17, 5, 26, 12, 5, 31, 3, 20];
var evenBirthdates = birthDates.filter (function(num) {
	var isEven = num % 2 === 0;
	return isEven;
});

console.log(evenBirthdates);

var oddBirthdates = birthDates.filter (function(num) {
	var isOdd = !(num % 2 === 0);
	return isOdd;
});

console.log(oddBirthdates);

*/

/** Example
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var even = numbers.filter(function(num) {
    var isEven = num%2==0;
    var greaterThanFive = num > 5;
    return isEven && greaterThanFive;
});
// [6, 8, 10]

console.log(even);

*/

/** Challenge 4 - Reduce


numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

sum = numbers.reduce(function(current, next) {
    return current + next; 
});

var earnings = [20, 25, 60, 20, 85, 20];
earnings.reduce(callbackfn);
// 210

var earnings = [20, 25, 60, 20, 85, 20];
var sum = earnings.reduce(function(previous, current) {
	return previous + current;
});

console.log(sum);
*/

// Challenge 4 - Reduce - Challenge 1

var earnings = [20, 25, 60, 20, 85, 20];
var sum = earnings.reduce(function(previous, current) {
	return previous + current;
});

console.log(sum);









