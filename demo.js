var Person = (function () {
    function Person(fNAme, lName, adj) {
        this.fNAme = fNAme;
        this.lName = lName;
        this.adj = adj;
        this.fullName = fNAme + " " + lName;
        this.desc = adj;
    }
    return Person;
}());
function iSchool(person) {
    return "The iSchool is " + person.desc + " " + person.fullName + "'s school";
}
var student = new Person("Leon", "Tao", "awesome");
document.body.innerHTML = iSchool(student);
