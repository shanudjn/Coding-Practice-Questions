const arr = [1, 2, 3, 4, 5];

Array.prototype.myForEach = function (callback) {
    for (let index = 0; index < this.length; index++) {
        callback(this[index], index)
    }
}

arr.myForEach((item) => {
    console.log(item + 100)
})


// polyfills for map

Array.prototype.myMap = function (callback) {
    var newArr = [];
    for (let index = 0; index < this.length; index++) {
        newArr.push(callback(this[index], index, this))
    }
    return newArr
}

const testMyMap = arr.myMap((item) => {
    return item
})

console.log(arr);
console.log(testMyMap);


// polyfills for filter

const filterredArray = arr.filter((item) => {
    return item > 2
})
console.log(filterredArray)

Array.prototype.myFilter = function (callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArr.push(this[i])
        }
    }
    return newArr
}

const newArr = arr.myFilter((item) => {
    return item > 2
})
console.log(newArr)


// / polyfills of find

const foundElement = arr.find((item) => {
    return item === 3
})


Array.prototype.myFind = function (callback) {
    // let result ;
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i]
        }
    }
}

let foundElement = arr.myFind((item) => {
    return (item === 3)
})


console.log(foundElement);


const reducedArray = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValur
}, 5)
console.log(reducedArray)


Array.prototype.myReduce = function (callback, initialValue) {

    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {

    }
}