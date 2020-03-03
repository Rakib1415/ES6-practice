
class Parent{
    constructor(){
        this.father = "foyjul";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;

    }
    getFullName(){
        return this.name + " "+ this.father;
    }
}

const babby = new Child("rakib");
const babby2 = new Child("rima");

// console.log(babby, babby2);
console.log(babby.getFullName());
console.log(babby2.getFullName());