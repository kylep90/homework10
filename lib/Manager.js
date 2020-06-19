// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee{
    constructor(id, name, email, department, officeNumber){
    super(id, name, email)
    this.department = department;
    this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager"
    }

    printManagerInfo(){
        console.log(`Manager: I am a manager of the ${this.department}`);
        console.log(`Manager: My office is ${this.officeNumber}`);
    }
}

const kyle = new Manager (001, "Kyle", "kyle@pingue.com", "Mathematics", 001)
const jerome = new Manager (002, "Jerome", "jerome@pingue.com", "Airplanes", 002)

kyle.printInfo();
kyle.printManagerInfo();
jerome.printInfo();

module.exports = Manager;
