function Person() {
    this.name = '';
    this.introduce = function () {
        console.log(`Hi I am ${this.name}`)
    }
}

const newPerson = new Person();
console.log(newPerson)
