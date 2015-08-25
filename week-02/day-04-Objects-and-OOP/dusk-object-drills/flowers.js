$(document).ready(function(){

  function Flower(color, petals, smellsPretty, origin){
   // Passed-in values
   this.color = color;
   this.petals = petals;
   this.smellsPretty= smellsPretty;
   this.origin = origin;

   this.name = "Western Dahlia";
   this.leafCount = 10;

   // Default values
   this.isEdible = false;
   this.wiltFactor = 100; //0 is dead, 100 is fresh

   this.comments = "Dahlias originated as a wildflower in the high mountain regions of Mexico and Guatemala. That’s why they naturally work well and bloom happily in cool fall breezes.";

   // append html string to website 
   this.render = function() {
       $('.name').append("Flower Name: " + this.name);
       
       $('.color').append("Flower Color: " + this.color);
       $('.petal').append("Petal Count: " + this.petals);
       $('.leafcount').append("Leaf Count: " + this.leafCount);
       $('.origin').append("Origin: " + this.origin);
       $('.smells').append("Smells Pretty: " + this.smellsPretty);
       $('.comments').append("Comments: " + this.comments);
    }

  }

var dahlia = new Flower("Orange",100,true,"Mexico");
dahlia.render();
});





/*



*/


/**Uber Challenge 
+ "<br>" + "Flower Color: " + this.color + "<br/>" + "Petal Count: " + this.petals + "<br/>" + "Leaf Count: " + this.leafCount + "<br/>" + "Origin: " + this.origin + "<br/>" + "Smells Pretty: " + this.smellsPretty + "<br/>" + "Comments: " + "Marie Antoinette fell head over heels for dahlias, and now there’s a variety named after her." + "</p>"


Image: 350 x 350 
flowerName
flowerColor
petalCount
leafCount
origin
edible
smells pretty
comments



*/



