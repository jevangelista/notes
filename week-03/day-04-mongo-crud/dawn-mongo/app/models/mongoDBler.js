var mongoose = require("mongoose"); 
mongoose.connect("mongodb://localhost/test");

// Imports the books.json file
var ourBooks = require("./books.json");



var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: String,
    author: String,
    description: String,
    genre: String,
    ISBN: Number
});


var Book = mongoose.model('Book', BookSchema);


// var count = 1;
// ForEach function that loops through every entry in our JSON file
// ourBooks.forEach(function(book) {   
	// Creates a book
// 	Book.create(book, function (err, book) {
// 		if(err)console.log("OH NO! Can't add " + book + ' because ' + err);
// 	  	console.log(count + '.  ' + book.title + " has been added.");
// 	  	count++;
// 	});

// });

// Looks for any books by the author "Anthony Doerr"
 // Book.find({author: "Anthony Doerr"}, function (err, books) {
 //    console.log(books);
 //    process.exit();
 // });

// Removes ALL books from the DB
// Book.remove({}, function(err) {
// 	if(err) return console.log("Error removing: "+err);
// 	console.log("Removed Successfully");
// 	process.exit();
// });

// Searches for all books with Ender in the title (regex)
// Book.find({ title: /^Ender/ }, function(err, book) {
// 	if(err) return console.log(err);
// 	console.log("Found: " , book);
// });


// Displays all books in DB
// Book.find({}, function (err, books) {
// 	console.log(books);
// 	process.exit();
// });