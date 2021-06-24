// function myReverse(word) {
//     let reversedWord = "";
//     for (let i = word.length - 1; i >= 0; i--) {
//         reversedWord += word[i]
//     }
//     return reversedWord
// }

// console.log(myReverse("Shahazad"))

// String.prototype.myReverse = function () {
//     let reversedWord = "";
//     for (let i = this.length - 1; i >= 0; i--) {
//         reversedWord += this[i]
//     }
//     return reversedWord
// }


// const result = "Hello".myReverse();
// console.log(result)


// [{one: 1, two: 2}, {three: 3, four: 4}, {five: 5}]
//{one:1, two:2, three:3}

// reduce, initialValue : {}

// const questionArray = [{ one: 1, two: 2 }, { three: 3, four: 4 }, { five: 5 }]

// function reducer(accumulator, currentValue) {
//     return { ...accumulator, ...currentValue }
// }

// const result = questionArray.reduce(reducer, {})
// console.log(result)

// const arr = [1, 22, 11, 5]

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//     setTimeout(() => {
//         console.log(arr[i])
//     }, sum * 1000)
// }

// function replaceString(sentence, wordToBeReplaced, replacer) {
//     const sentenceArray = sentence.split(" ");

//     const newSentence = sentenceArray.map((item) =>
//         (item === wordToBeReplaced) ? replacer : item
//     )
//     return (newSentence.join(" "))

// }

// const answer = replaceString("Hi join here in the join group", "join", "add")
// console.log(answer)

const mySetTimeOut = function (callback, timeDelay) {
    setTimeout(callback, timeDelay)
}

mySetTimeOut(() => {
    console.log("Hello")
}, 3000)