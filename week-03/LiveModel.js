function Model(name){
  this.type  = name;
  this.data = [];
  this._id = 0;
}
Model.prototype = {
    create : function (object, callback){
        var objectContainer = {};
        objectContainer._id = this._id++;
        objectContainer._ts = Date.now();
        objectContainer.data = object;
        this.data.push(objectContainer);
        return callback(objectContainer);
    },
    
    find_by_id : function(objectId, callback){
        var found;
        this.data.forEach( function (object) {
          if(object._id === objectId){
            found = callback(object);
          }
        });
        return found;
    }
  }
  
var User = new Model("user");
  
var Justin = new Person("Justin", "Reyes");
var Justin2 = new Person("Justin", "Almeida");
/* Create Users in ORM */
var createdUser = User.create(Justin, function(person){
    return person;
  });
 
console.log(createdUser)
  
  User.create(Justin2, function(person){
    return person;
  });
  
  
/* Find object by id */
var foundUser = User.find_by_id(1, function(success) {
    return success;
});
console.log("Searched:\n", foundUser);