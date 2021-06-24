const superhero = {
    name: "Iron Man",
    age: 40,
    movies: 3,
    suitUp: function () {
        console.log("Suiting Up!")
    }
}

superhero.name = "Captain America";
superhero.age = 100;
superhero.place = "Brooklyn"
superhero.declareName = function () {
    console.log("I am  captain america")
}

console.log(superhero)