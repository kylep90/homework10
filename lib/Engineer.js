// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer {
    constructor (id, name, email, engDepartment, GitHub);
    super(id, name, email){
        this.engDepartment = engDepartment;
        this.GitHub = this.GitHub;
    }

    getRole(){
        return "Engineer"
    }
    printInfo(){
        console.log(`Engineer: I work in the ${this.department}`)
        console.log(`Engineer: You may access my repositories at ${this.GitHub}`)
    }
}

module.exports = Engineer;