// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern{
    constructor(id, name, email, school)
    super(id, name, email){
        this.school = school
    }

    getRole(){
        return "Intern"
    }

    printInternInfo(){
        console.log(`Intern: I am a student of ${this.school}`)
    }
}

module.exports = Intern;