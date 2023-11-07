//Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. 
//Include a method to calculate annual salary. 
//Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. 
//Override the annual salary calculation method to include bonuses for managers. 
//Create two instances of the 'Manager' class and calculate their annual salary.

const bonus1=parseInt(prompt("Enter the bonus amount for manager1"))

const bonus2=parseInt(prompt("Enter the bonus amount for manager2"))


class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary
    }

annualSalary(){
    return this.salary*12;
}
}
 
class Manager extends Employee{
    constructor(name,salary,department){
        super(name,salary);
        this.department=department
    }

annualSalaryBonuse(){

    console.log(`My name is ${this.name}.I am a ${this.department}. My annual salary`,super.annualSalary());
    
    console.log(` ${this.name} annual salary with bonuse`,super.annualSalary()+bonus1 );

}

}

let manager1=new Manager("John",15000,"Developer")

let manager2=new Manager("Doe",13000,"Tester")

manager1.annualSalaryBonuse()
manager2.annualSalaryBonuse()
