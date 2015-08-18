//where our iterators live
var o_o = {
  each: function(list, callback) {
    //code here...
    for (var i = 0; i < list.length; i++) {
      callback(list[i]);
    }

  },
  map: function(list, callback){
    //code here...
    var newArray = [];
      for (var i = 0; i < list.length; i++) {
          newArray.push(callback(list[i]));
        }
      return newArray;
  },
  filter: function(list, callback) {
    var newArray = [];
    for (var i = 0; i < list.length; i++) {
      if (callback(list[i])) {
        newArray.push(list[i]);
      }
    }
    return newArray;
  }
};


//expose our iterators to other files
//such as our assertions
 module.exports = o_o;
