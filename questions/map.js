const arr = [1, 2, 3, 4, 5, 6];

const oddSum = arr.reduce((acc, curr) => {
    return (curr % 2 !== 0) ? acc + curr : acc
}, 0)

const oddIndicesSum = arr.reduce((acc, curr, index) => {
    return (index % 2 !== 0) ? acc + curr : acc
}, 0)

const biggestNumber = arr.reduce((acc, curr) => {
    return (curr > acc) ? acc = curr : acc
}, -100)


const oddEvenIncDec = arr.map((item) => {
    return (item % 2 === 0) ? item + 1 : item - 1
})

const sumOfOddEven = arr.reduce((acc, curr) => {
    if (curr % 2 === 0) {
        return ({ ...acc, even: acc.even + curr })
    }
    return ({ ...acc, odd: acc.odd + curr })
}, { even: 0, odd: 0 })



const stringArr = ["pineapple", "apple", "mango", "papaya", "ntz", "bcdf"]

const similarString = stringArr.reduce((acc, curr) => {
    if (curr in acc) {
        acc[curr] += 1
    } else {
        acc[curr] = 1
    }
    return acc
}, {})

const similarString2 = stringArr.reduce((acc, curr) => {
    if (curr.length in acc) {
        acc[curr.length] += 1
    } else {
        acc[curr.length] = 1
    }
    return acc
}, {})

const vowelStrings = stringArr.filter((item) => {

})


const keyArray = stringArr.map((item) => {
    return { [item]: item.length }
})

console.log(oddSum)
console.log(oddIndicesSum)
console.log(biggestNumber)
console.log(oddEvenIncDec)
console.log(sumOfOddEven)
console.log(similarString)
console.log(similarString2)
console.log(vowelStrings)
console.log(keyArray)



