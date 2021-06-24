

// showMessage();

// function Person() {
//     this.name = "Shahazad";
//     this.age = 21;
// }

// const newPerson = new Person();
// newPerson.address = "Assam";

// const newPerson2 = Object.create(Person);

// const showMessage = function () {
//     let i = 5
//     setInterval(() => {
//         console.log(i)
//         if (i > 0) {
//             i -= 1
//         }
//         return
//     }, 1000)
// }

// const timerId = setInterval(() => {
//     console.log("Running")
// }, 1000)
// setTimeout(() => clearInterval(timerId), 5000)

// setTimeout(function tick() {
//     console.log("Running")
//     setTimeout(tick, 2000);
// }, 2000);


// function x() {
//     for (let i = 0; i < 5; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000);
//     }

// }
// x();

function x() {
    for (var i = 0; i < 5; i++) {
        function close(i) {
            setTimeout(() => {
                console.log(i)
            }, i * 1000);
        }
        close(i)
    }
}
x()