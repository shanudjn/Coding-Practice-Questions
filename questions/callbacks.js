function firstFunction(secondFunction) {
    setTimeout(() => {
        console.log("I am the first function")

    }, 5000)
    secondFunction();
}

function secondFunction() {
    console.log("I am the second functions")
}

firstFunction(secondFunction);
