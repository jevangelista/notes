**Express Routing** -- Exercises

### Which Taco (Indexing a Collection) -- [solution](solutions.md)

Hardcode some data in index.js:
``` javascript
    
var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];
               
var tacos = [
                "Soft Taco",
                "Crunchy Taco",
                "Super Taco"
               ];
```

* Write a route with to allow you to access a `taco` by it's index in the array, such that one could go to the route: "/taco/2" and get back a server response with the text "Super Taco".
* Write a route with to allow you to access a `burger` by it's index in the array, similar to above.

### The Number Guessing Game -- [solutions](solutions.md)

* Build a simple number guessing game using query parameters.

``` javascript
app.get("/pickanumber", function (req, res) {
    var number = req.query.number;
    if (number === 7) {
        res.send("You picked " + number + "!");
    }
});
```

* When the user goes to `/pickanumber?number=10` the server should respond with either "Too High", "Too Low" or "Nailed it!"


### Calculator app (Using Query Parameters) -- [solutions](solutions.md)

* Create a `/multiply` route that uses query params `x` and `y` to multiple two numbers and send the result back: `"10 is the result"`.
* Create an `/add` route, similar to above.
