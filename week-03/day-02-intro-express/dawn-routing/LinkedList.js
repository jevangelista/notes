/* Linked List */
function List() {
    this.start = null;
    this.end = null;
}

/*  List methods */
List.prototype = {
    /*
        Method: makeNode
        Make a simple Node object
    */
    makeNode : function() {
        return {data: null, next: null};
    },

    /*
        Method: addAtEnd
        Adds a Node to the END of the List
    */
    addAtEnd: function(data) {
        // if linkedList is empty
        if(this.start === null) {
            // start becomes a node
            this.start = this.makeNode();
            // end becomes the start node
            this.end = this.start;

            // else linkedList isn't empty
        } else {
            // create a next property for end and assign it a new Node
            this.end.next = this.makeNode();
            // move the end node to end's next node
            this.end = this.end.next;
        }
        // finally, add the data to the end Node
        this.end.data = data;
    },

    /*
        Method: print
        Traverse the list. For each node, append thte current node's data to
        a master list of all data, including head and tail
    */
    print: function() {
        var listString = 'Head -> ';
        // set our 'current' Node to the starting node
        var current = this.start;
        // while the 'current' Node isn't null
        while(current !== null) {
            // print out the 'current' Node's data
            listString += current.data + ' -> ';
            // assign our 'current' Node's next to be 'current' (increment!)
            current = current.next;
        }
        console.log(listString +'Tail');
    },

    /*
        Method: insertAtHead
        Insert a new Node at the head of the list.
    */
    insertAtHead: function(data) {
        // Enter code here!   

        //1. attach temp next to start 
        //2. start= temp

        // make temporary node
        var temp = this.makeNode();

        // data is whatever is passed through function
        temp.data = data;

        // start becomes next for temp node
        temp.next = this.start;

        //temp becomes new start
        this.start = temp;

    },

    /*
        Method: length
        Traverse the list. Return the amount of Nodes in the list.
    */
    length: function() {
        // Enter code here!

        /** Kristian's solution
                for (var current = this.start, i = 0; current !== null; current = current.next, i++) {}
        return i;
        */


    },

            //Alternate, multiine method:
    // length: function() {
    //     var current = this.start;
    //     var i = 0;
    //     while(current !== null) {
    //         i++;
    //         current = current.next;
    //     }
    //     return i;
    // },


    /*
        Method: exists
        Traverse the list. If a Node with the data passed in exists, then return
        true. If not, return false
    */
    exists: function(data) {
        // Enter code here!

        // start our node at start of the list
        var node = this.start;

        // loops through list until node === null
        while (node !== null) {
            if (data === node.data) {
                return true;
            }

            //increment our node    
            node = node.next;
        }   
        return false; 
        /** Justin's solution
        for (var node = this.start; node; node; node = node.next){
            if (data === node.data) {
                return true;
            }
            return false;
        } */
    },

    /*
        Method: each
        Traverse the list. For each Node, call the function f on that Node.
        Example: f(current);
    */
    each: function(f) {
        // Enter code here!
        // f(node)

        //start our node at the start of the list
        var current = this.start;

        //traverse the list, call function f on that node
        while (current !== null) {
            f(current);
            current = current.next;
        }

    },

    /*
        Method: indexOf
        Traverse the list. If a Node with the data passed is found, return an
         index (integer) of that Node's location.
    */
    indexOf: function(data) {
        // Enter code here!

        var node = this.start;
        var i = 0;
    
        while (node !== null) {
            if (node.data === data) {
                return i;
            } else {
                node = node.next;
            }
            i = i + 1;
        }


    },

    /*
        Method: dataFrom
        Traverse the list to the ith position and return the corresponding data.
              */
    dataFrom: function(i) {
        // Enter code here!
             var current = this.start; 

             var count = 0;
             while (current !== null) {
                if (count == i) {
                    return current.data;
                count++;
                current = current.next
                }
            };


            //if will return the data 
            // else will go to next node in LinkedList

    },

    /*
        Method: insertAt
        Traverse the List.  Find the ith Node in the list and insert a new Node
         after it.  You must preserve the list structure!
    */
     insertAt: function(i, data){
        var previousNode;
        var newNode = this.makeNode();
        newNode.data = data;
        var current = this.start;
        var index = 0;
        if(i > this.length() + 1){
            return "index out of range";
        }
        if(i === 0){
            this.insertAtHead(data);
        }
        while(current !== null){
            if(index === i - 1){
                newNode.next = current.next;
                current.next = newNode;
                if(i === this.length() - 1){
                    this.end = newNode;
                }
                return "inserted";
            }
            index++;
            current = current.next;
        }
    },

    /*
        Method: delete
        Traverse the list, find the node with the corresponding data,
        and remove that node. List must still be fully intact after
        you remove the node!
    */
    delete: function(data) {
        // Enter code here!
        var current = this.start;
        var i = 0;

        while(current !== null){
            if (current.data === data) {
                
            }

        }

    }
}

//find the node with the corresponding data
//remove the node
//Add the subsequent node in its place


/* LinkedList initialization */
var LinkedList = new List();

/* We're creating our "base" linkedList */
var i = 2;
while(i <= 20) {
    LinkedList.addAtEnd(i);
    i+=2;
}

/* print */
LinkedList.print();

/* Run your functions here to test. */
//Insert functions here to to test.

console.log(LinkedList.insertAt(3, "burger"));



/** .each function - check each method
LinkedList.each( function(node){
    console.log(node.data + " has been accessed.");
})

function accessor(node) {
    console.log(node.data + " has been accessed.");
}

LinkedList.each(accessor);
*/

/** exists function 
var foundData = LinkedList.exists(8);
console.log("Does 8 exist in our list: " + foundData);
*/

/** length function
var length = LinkedList.length();
console.log(length);
*/

/** insertAtHead function
LinkedList.insertAtHead("Burrito");
*/

/* Print again to see your results */
LinkedList.print();


