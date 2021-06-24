// function Person() {
//     this.name = "Shahazad";
//     this.introduce = function () {
//         console.log(`hello I am ${this.name}`)
//     }
// }

// const Person1 = {
//     name: "Shahazad",
//     introduce: function (age, place) {
//         console.log(`Hi I am ${this.name} and I am ${age} years old . I am from ${place}`)
//     }
// }

// const Person2 = {
//     name: "Xavier"
// }

// Person1.introduce.call(Person2, 12, "Assam")
// Person1.introduce.apply(Person2, [12, "Assam"])



// const Dog = {
//     age: 5,
//     grow: function () {
//         this.age += 1
//     }
// }

// function invokeTwice(cb) {
//     cb();
//     cb();
// }

// Dog.grow();
// console.log(Dog.age)

// invokeTwice(Dog.grow)
// console.log(Dog.age)

// const myGrow = Dog.grow.bind(Dog);

// invokeTwice(myGrow)
// console.log(Dog.age)


///polyfill for bind

const Person = {
    age: 1,
    growAge: function () {
        this.age += 1
    }
}

function invokeTwice(callback) {
    callback();
    callback();
}


Function.prototype.myBind = function (obj) {

    return function (...args) {
        this.call(args[0])
    }
}

const newPerson2 = Person.growAge.myBind(Person)

const newBound = invokeTwice(newPerson2)
console.log(Person.age)






