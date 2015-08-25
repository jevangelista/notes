/** Pseudo code


func letterCounter(word) {
	// split the word into letters
	// create a placeholder object
	// loop through each letter
	// if counterIndex[letter] is undefined, set it to 1
	// if counterIndex[letter] is a number, just add 1
	// return the letter counter object
}

*/

function letterCount(fruit) {
	var output = {};

	fruit.split('').forEach(function(char){
		if (char !== " ") {
			var count = output[char];
			if (count === undefined){
				output[char] = 1;
			} else {
				output[char] = count + 1; 
			}
		}
	})

	return(output);
}

letterCount("apple");