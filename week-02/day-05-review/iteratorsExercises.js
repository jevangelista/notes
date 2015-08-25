var students = ["Nick", "Camilo", "Neil", "Stephen", "Keala", "Nathan", "Tika", "Terry", "Olivia","Lisa","Nathan","Humberto","Heather","Justin"];

/*
for (var i = 0; students.length; i++){
	console.log();
}

 Array Methods 
students.forEach( function(student){
	console.log("hello, " + student)
});

//Break down
function greet(student){
	console.log("hello", student);
}
students.forEach(greet);
*/

/* Map Method 
// Big distinction: Map is assigned to another array

function takeOnlyRight(student){
	if(student === "Keala"){
		return student;
	} 
	if(student === "Steven"){
		return student;
	}
}

var studentOnTheRight = [];
studentOnTheRight = students.map(takeOnlyRight);
consle.log(studentsOnTheRight);
*/


/* Filter Method */

//needs a boolean return
function longerThanSix (student) {
	return (student.length >= 6);
}

var filteredArray = [];
filteredArray = students.filter(longerThanSix);
console.log(filteredArray);


//break down
var filteredArray = [];
filteredArray = students.filter(function longerThanSix(student) {
	return (student.length < 6);
});

console.log(filteredArray);


/* Reduce Method */
//Reduces entire array of elements into one single value
//Reduce requires a return in the callback

var resultNumber;

numbers.reduce(callback);

function multiply(previous,current){
	console.log("previousValue:", previousValue);
	console.log("currentValue:", currentValue);
	return currentValue * previousValue;
}

numbers.reduce(multiply);
console.log(resultNumber);







