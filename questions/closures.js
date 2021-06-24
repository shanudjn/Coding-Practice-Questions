
function a() {
    let num = 5

    function b() {
        console.log(`I recall ${num} from memory`)
    }
    return b();
}

const recall = a();
console.log(recall)