/** HTML Strings Challenges

the name of the course
the first student's id and full name
the number of students in the class
a list of github usernames

*/

/**
var courseName = data.course;
console.log(courseName);

var studentInfo = data.students[0];
console.log(studentInfo);

var firstStudentInfo;


var firstName = data.students[0].first_name;
console.log(firstName);

var lastName = data.students[0].last_name;
console.log(lastName);

var studentsNumber = data.students.length;
console.log(studentsNumber);

var gitHubNames = data.students[0].github_username;
console.log(gitHubNames);
*/

var gitHubNames = data.students.forEach(function(element){
	console.log(element.github_username);
	});

var gitHubNames = data.students.map(function(element) {
	return element.github_username;
});

console.log(gitHubNames);

