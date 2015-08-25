//Simple Object
var Person = {
	first_name: "Jamie",
	last_name: "Evangelista",
	github_username: "https://github.com/jevangelista"
	_id = 242;
	_ts = 1440453712736;
};

//Object constructor
 function Model(name) {
    this.type = name;
    this.data = [ ];
    this._id = 0;
    this._ts = Date.now();
 }

//Object prototype
Model.prototype = { 
	create : function(object, callback){
		var object_container = {
			this._id = Model.id;
			id++;
			this._ts = Data.now();
			this.data = data;
		}
		return object_container;
	}

	find_by_id : function(object_id,callback) {
		data.forEach function () {
			if ()
		};
	}

	update : function(object_id,update_object,callback){
		var matching_object = data.object_id;
		var update_object = matching_object;
		return matching_object;
	}
	destroy : function(object_id,callback){
		var matching_object = data.object_id;

	}

};

//find_by_id
f