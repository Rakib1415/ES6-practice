
class Student{
    constructor(id,name){
        this.id = id;
        this.name = name;
        this.school = "kolimulla high school";
    }
}

const student1 = new Student(22,"shuvo");
const student2 = new Student(33,"mahiya");
const student3 = new Student(5,"rahima");

// console.log(student1,student2,student3);

console.log(student1.name,student2.name,student3.name);
