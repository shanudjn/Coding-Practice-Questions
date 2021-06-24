function strLength(name, callback) {
    let lengthOfName = name.length;
    callback(lengthOfName)
}

const result = strLength("Shahazad", (lengthOfName) => {
    console.log("Hi length of my name is", lengthOfName)
})



function willThanosKillMe(name, successCb, failureCb) {
    if (name.length < 3) {
        successCb()
    } else
        failureCb();
}

willThanosKillMe("Shasa", () => { console.log("Success") }, () => { console.log("Failed") })