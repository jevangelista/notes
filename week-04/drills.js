/* Merge Sort */

var array = [ 'Tika','Keala','Neil','Sharon', 'Francis', 'Nathan',
  'James', 'Olivia', 'JustinR', 'Peter', 'Jamie', 'Kristian', 'Stephen',
  'Melissa', 'JustinA', 'Tom', 'Daniel', 'Ian', 'Heather', 'Marcel',
  'Humberto', 'Eric', 'Darragh', 'Sakina', 'Nick', 'Lisa', 'Sarad',
  'Katie',  'Bradley' ]

var num = [4,7,1,2,9,8];  

function mergeSort( array ) {

    if (array.length < 2) {
        return array;
    }

    var middle = parseInt(array.length / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle, array.length);

    return merge(mergeSort(left), mergeSort(right));

    // // divide the array in two
    // var firstHalf = array.splice(0, Math.floor(array.length/2));
    // // console.log(array);
    // console.log(firstHalf);
    // // call merge function ( recursively call mergeSorts) 
    // if (firstHalf.length === 1) {
    //     return (firstHalf);
    // } else {
    //     return mergeSort(firstHalf);
    // }
};

mergeSort(num);

var leftArray = [1,2,4];
var rightArray = [7,8,9];

function merge( leftArray, rightArray ) {
    console.log(leftArray);
    console.log(rightArray);
    var resultArray = [];

    while (leftArray.length !== 0 && rightArray.length !== 0 ) {
        if (leftArray[0] > rightArray[0]) {
            resultArray.push(rightArray[0]);
            rightArray.splice(0,1);
        } else if (rightArray[0] > leftArray[0]) {
            resultArray.push(leftArray[0]);
            leftArray.splice(0,1);
        } else {
            resultArray.push(leftArray[0]);
            leftArray.splice(0,1);
        }

        // console.log("left array is " + leftArray);
        // console.log("right array is " + rightArray);
        // console.log("result array is " + resultArray);
    }

    if (leftArray.length !== 0) {
        resultArray = resultArray.concat(leftArray);
    } else if (rightArray.length !== 0) {
        resultArray = resultArray.concat(rightArray);
    }

    // console.log(resultArray);
    //while we still have two lists:

        //create a new list and insert the smallest to largest elements from either list

    //insert any remaining elements


    // return resulting list.
}

//merge(leftArray, rightArray);




/* Plan - Bubble Sort
Iteration 1

Look at the first two elements in the list.

0: [5, 4,2,3,1,6]

Is 5 > 4 ? Yes! Swap!

If an element on the left (5) is greater than the element on the right (4), the two elements 'swap' locations

1: [4,5,2,3,1,6]

2: [4,2,5,3,1,6]

3: [4,2,3,5,1,6]

4: [4,2,3,1,5,6]

-for loop to traverse it 
swap(a,b) { 
if i > i + 1
}

Important: We now know that the last element in the list is the largest element in the list. There's no need to do a comparison with that number ever again.


var array = [5,4,2,3,1,6];


function bubbleSort(array) {
    var end = array.length - 1;
    // create a swapped switch (true/false)
    var swapped = true;
    // while our switch is 'true'
    while(swapped){
        //console.log(array);
        // flip the swapped switch to false
        swapped = false;
        for(var i = 0; i < end; ++i) {
            // If an element is greater than its neighbor
            if (array[i] > array[i+1]) {
                // swap the element and its neighbor
                var temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                // flip the switch to true
                swapped = true;
            }
        }
        end--;
    }
};

var newArray = bubbleSort(array);
console.log(newArray);



// for (var i = 0; i < data.length; i++) {

// 	var a = data[i];
// 	var b = data[i + 1];
// 	var temp;

// 	if (a > b) {
// 		temp = a;
// 		a = b;
// 		b = temp;
// 		console.log(data);
// 	}
// }




// function swap (data) {
// 	while ( ) {

// 		for (var i = 0; i < data.length; i++) {
// 			console.log();
// 		}
// 	}
// }


// if ( a > b ) {
// 	temp = a;
// 	a = b;
// 	b = temp;
// }

// console.log(a);

*/




