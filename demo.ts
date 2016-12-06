class Person {
    fullName: string;
    desc: string;
    constructor(private fNAme, private lName, private adj) {
        this.fullName = fNAme + " " + lName;
        this.desc = adj;
    }
}
interface Student {
    fName: string;
    lName: string;
}

function iSchool(person: Person) {
    return "The iSchool is " +person.desc + " " + person.fullName + "'s school";
}

var student = new Person("Leon", "Tao", "awesome");
document.body.innerHTML = iSchool(student);