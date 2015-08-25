function Flower(name, color, petals, smellsPretty, origin, leafCount, comments){
   /* Properties */
   // Passed-in values
   this.name = name;
   this.color = color;
   this.petals = petals;
   this.smellsPretty= smellsPretty;
   this.origin = origin;
   this.leafCount = leafCount;
   this.comments = comments;

   // Default values
   this.isEdible = true;
   this.wiltFactor = 20; //0 is dead, 100 is fresh
   this.image = "http://i.imgur.com/AQCycsq.jpg";

    /* Methods */
   this.sniff = function(){
       console.log("Sniff Sniff Sniff!");
   };
   // Demonstrates use of arguments with methods
   this.hasGoodSmell = function(answer) {
       if (answer) {
           return 'This flower smells amazing!';
       } else {
           return 'What a noxious weed!';
       }
   };
   // Demonstrates use of local object variables
   this.describe = function(answer) {
       alert("This flower is " + this.color + ".");
     }
   /// Demonstrates object to object interaction
   this.compare =  function(otherFlower) {
       return("My " + this.color + " flower is much prettier than your " +
         otherFlower.color + " flower :P");
   };
   // append html string to website
   this.render = function() {
       var flowerTemplate = _.template($('#flower-template').html());
       var flowerHTML = flowerTemplate(this);
       $('#flower-placeholder').append(flowerHTML);
   };
   // displays message to console
   this.giveFlower= function(){
       console.log("Here's a flower")
    };
}

function Bee(flower1, flower2){
   this.flower1 = flower1;
   this.flower2 = flower2;

   this.crossPollinate = function() {
       var colorBlend = flower1.color + "-" + flower2.color;
       var petalAvg = Math.round((flower1.petals + flower2.petals) / 2);
       var leafAvg = Math.round((flower1.leafCount + flower2.leafCount) / 2);
       var smellTrait = flower1.smellsPretty && flower2.smellsPretty;
       var flower3 = new Flower(colorBlend, petalAvg, smellTrait, "Class Room 6");
       flower3.leafCount = leafAvg;

       return flower3;
   }

}

$(document).ready(function()
  {
    

    var comment = 'It is believed that these flowers were given their name by Antonio '
      + 'José Cavanilles, Director of the Royal Gardens in Madrid. He actually named the flower after another botanist named Anders Dahl.'
    var western_dahlia = new Flower("Western Dahlia", "orange", 100, true, "Mexico", 10, comment);
    western_dahlia.render();

  }
);





/** Western Dahlia
{image: "http://i.imgur.com/AQCycsq.jpg",
flowerName: “Western Dahlia”, 
color: “orange”, 
petals: 100, 
leafCount: 10, 
origin: “Mexico”, 
isEdible: true,
smellsPretty: true,
comments: "It is believed that these flowers were given their name by Antonio José Cavanilles, Director of the Royal Gardens in Madrid. He actually named the flower after another botanist named Anders Dahl.”}"
*/