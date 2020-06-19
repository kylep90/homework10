// TODO: Write code to define and export the Employee class

class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    printInfo(){
        console.log(`Employee: Hi my name is ${this.name}`)
        console.log(`Employee: My id number is ${this.id}`)
        console.log(`Employee: You can contact me at ${this.email}`)
    }
}
module.exports = Employee;