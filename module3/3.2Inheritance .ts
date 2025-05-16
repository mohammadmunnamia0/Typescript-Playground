{
                //Both class have common properties , so we can reduce the code using Inheritance

    //class 1
  class Student {
    name: string;
    age: number;
    role: string;
    group: string;

    constructor(name: string, age: number, role: string) {
      this.name = name;
      this.age = age;
      this.role = role;
    }

    //function-method
    studyHour(hour: number) {
      console.log(
        `Im am ${this.name} a ${this.role} . I have to study more then ${hour} a day.`
      );
    }
  }

  //class2
  class Teacher {
    name: string;
    age: number;
    role: string;
    department: string;

    constructor(name: string, age: number, role: string, department: string) {
      this.name = name;
      this.age = age;
      this.role = role;
      this.department = department;
    }

    //function-method
    takeClass(numOfClass: number) {
      console.log(
        `Im am ${this.name} your ${this.role} . I have to take more then ${numOfClass} Class a day.`
      );
    }
  }

  const student = new Student("Munna",24,"student");
  student.studyHour(5);
  const teacher = new Teacher("Suraiya",24,"Faculty","BCSE")
  teacher.takeClass(7);

}


/* ---------------------------------------------Using Inheritance--------------------------------------------------*/


{
                                           
class Person {
    name: string;
    age: number;
    role: string;
   
    constructor(name: string, age: number, role: string) {
      this.name = name;
      this.age = age;
      this.role = role;
    }
}

                                    //student class Inherit the Person class using "extends"

class  Student extends Person {

    group : string;

    constructor(name: string, age: number, role: string,  group : string) {
        super(name, age, role);
        this.group= group; // this is not in the parent class thats why we have to write it as usual
    }

    //function-method
    studyHour(hour: number) {
      console.log(
        `Im am ${this.name} a ${this.role} from ${this.group} . I have to study more then ${hour} hour a day.`
      );
    }
  }

                                    //Teacher class Inherit the Person class using "extends"

  class Teacher extends Person{

    department: string;

    constructor(name: string, age: number, role: string, department: string) {
      super(name,age,role);
      this.department = department; // this is not in the parent class thats why we have to write it as usual
    }

    //function-method
    takeClass(numOfClass: number) {
      console.log(
        `Im am ${this.name} your ${this.role} from ${this.department} . I have to take more then ${numOfClass} Class a day.`
      );
    }
  } 

  
  const student = new Student("Munna",24,"student","Science");
  student.studyHour(5);
  const teacher = new Teacher("Suraiya",24,"Faculty","BCSE")
  teacher.takeClass(7);
}