{
    class Person {

        constructor(public name: string, public age: number,public role: string){

        }

    }

    //student is inherit the person
    class Student extends Person {
         group : string;
        constructor (public name: string, public age: number,public role: string, group : string){
            super(name, age, role);
            this.group = group;
        }
    StudyHour(hour: any){
        console.log(`Hello, there im ${this.name}. Im a ${this.role}. Im ${this.age} years old. Im in ${this.group} Group. Everyday i have to study at least ${hour} Hour `);
    }    
    }

    
    //Teacher is inherit the person
    class Teacher extends Person {
         Department : string;
        constructor (public name: string, public age: number,public role: string, Department : string){
            super(name, age, role);
            this.Department = Department;
        }
    takeClass(NumOfClass: any){
        console.log(`Hello, there im ${this.name}. Im a ${this.role}. Im ${this.age} years old. Im in ${this.Department} Group. Everyday i have to take at least ${NumOfClass} Class `);
    }    
    }


    const student1 = new Student('Munna',24,"Student","Science");
    student1.StudyHour(5);
    const teacher1 = new Teacher("Suraiya",23,"Faculty","BCSE");
    teacher1.takeClass(3);
}