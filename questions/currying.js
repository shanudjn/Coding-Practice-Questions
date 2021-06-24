// function add(num1, num2) {
//     return num1 + num2
// }

// console.log(add(1, 2))

//add(1)(2)


function modifyAdd(num1) {

    return function (num2) {
        return num1 + num2
    }

}

const ans = modifyAdd(1)(2);

console.log(ans)




// function greet(name) {
//     return function (statement) {
//         return statement + name
//     }
// }

// const introduction = greet("Shahazad")("Hi I am ")

// console.log(introduction)