// const arr = [1, 2, 3, 4, 5];

// const result = arr.map((item) => (item + 1))
// console.log(result)


// Array.prototype.myMap = function (callback) {
//     const newArr = []
//     for (let i = 0; i < this[i]; i++) {
//         newArr.push(callback(this[i], i, this))
//     }
//     return newArr
// }

// const result2 = arr.myMap((item) => item + 2)
// console.log(result2)


const arr = [1, 1, 2, 3, 5, 5]

const obj = {}

for (let i of arr) {
    obj[i] = true;
}

const result = Object.keys(obj)
console.log(result)