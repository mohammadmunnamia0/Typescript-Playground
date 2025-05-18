                                                //Polymorphism
{
    class HappyPerson {
        getSleep(){
            console.log(`I sleep 8 Hour Everyday.`);
        }
    }

    class Student extends HappyPerson{
        getSleep(){
            console.log(`I sleep 6 Hour Everyday.`);
        }
    }

    class Developer extends HappyPerson{
         getSleep(){
            console.log(`I sleep 6 Hour Everyday.`);
        }
    }

    //function 
    const SleepingCycle = (params:HappyPerson) =>{
        params.getSleep()
    }

    const happyUser = new HappyPerson();
    const StudentUser = new Student();
    const developerUser = new Developer();

    SleepingCycle(happyUser); //getSleep is the same method that has been used in different class , and its act differently for each class
    SleepingCycle(StudentUser);
    SleepingCycle(developerUser);

}

{
    //parent class
    class Shape{
        getArea():number{
            return 0;
        }
    }

    //child class 1 inherit parent class
    class Circle extends Shape{

        constructor(public radius:number){
            super();
        }

        getArea():number{
            return Math.PI*this.radius*this.radius; // Whenever we want to use a property of a class inside that class method, that time we must have to use "this.property name".
        }
    }

    //child class 2 inherit parent class
      class Rectangle extends Shape{

        constructor(public hight:number, public width:number){
            super();
        }

        getArea():number{
            return this.hight*this.width; // Whenever we want to use a property of a class inside that class method, that time we must have to use "this.property name".
        }
    }

    //function
    const getShapeValues = (param:Shape) =>{
        console.log(param.getArea());
    }

    //creating constrain

    const AreaOfCircle = new Circle(5); //See I am passing the values in the.gate area method.Similarly,the rectangle also use the gate area method. Both.of us using the gate area method, but we are getting the different value. This is called polymorphism. It means whenever it need to change its characteristic it will change it for the specific class.

    const AreaOfRectangle = new Rectangle(10,15);//See I am passing the values in the.gate area method.Similarly,the rectangle also use the gate area method. Both.of us using the gate area method, but we are getting the different value. This is called polymorphism. It means whenever it need to change its characteristic it will change it for the specific class.

   getShapeValues(AreaOfCircle);
   getShapeValues(AreaOfRectangle);

}