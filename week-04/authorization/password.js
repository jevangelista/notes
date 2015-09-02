var bcrypt = require('bcrypt');

// user object 
var user = {name: 'bob', createdAt: Date.now() }
// create a plaintext password
var password = 'swordfish';
// generate salt for more security
bcrypt.genSalt(10, function(err, salt) {
  // hash the password w/ the salt
  bcrypt.hash(password, salt, function(err, hash) {
    // save the password digest (hash) to the user
    user.passwordDigest = hash;
  });
});

bcrypt.compare('swordfish', user.passwordDigest, function (err, res){
	return console.log("user authenticated: " + res);
})