// Object Oriented Programming Homework Challenges

function Flower(){
    this.color = "orange";
    this.petals = 103;
    this.smellsPretty= true;
    this.game = function(){
        counter = this.petals;
        while (this.petals > 1) {
        	counter = counter -1;
        	console.log("he love me");
        }


    };
}

var western_dahlia = new Flower();

western_dahlia.color;

function Flower(){
    this.isEdible = true;
    this.wiltFactor = 80;
    this.origin = "Mexico";
    this.color = "orange";
    this.petals = 103;
    this.smellsPretty= true;
}

var western_dahlia = new Flower();