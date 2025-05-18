                                                    //Statics in OOP

{

class Counter {
    count : number = 0;

    //function1 for increment
     increment(){
        return (this.count = this.count + 1);
    }

    //function2 for decrement
     decrement(){
        return (this.count = this.count - 1);
    }
}

//now lets call the two function increment & decrement ,by creating their Instance

const Levelup = new Counter();
console.log(Levelup.increment());

const LevelDown = new Counter();
console.log(LevelDown.increment());

/*                  //Output
User@MdMunnaMia MINGW64 /c/Web-Dev-Next-Level/Mission1/typescript/module3 (main)
$ ts-node-dev --respawn --transpile-only ./3.7Statics_in_OOP.ts 
1       // As I have called two time, the incremental function. This is the reason the 1 is printed two times, and it's having 2 memory space. 
           Ami same function call dile sheta join ekta memory space khay sheita efficient onk , tai amra use korbo Static 
1
*/

}

// -------------------------------Static------------------------

{

    class Counter {
       static count : number = 0; //count is a static property now

      static increment(){//what static does , its help to reduce the memory space also it help to reduce the code , check how i call the function below , after using the static

        // return(this.count=this.count+1); //to access the static property we cant use "this.propertyname", we have to use classname.propertyname
        return(Counter.count = Counter.count+1);
       }

        static decrement(){ 
        {
        // return(this.count=this.count-1); //to access the static property we cant use "this.propertyname", we have to use classname.propertyname
        return(Counter.count = Counter.count-1);
       }
       }

    }


    /* 
    
    //We can call the function and write this in more convenient way without creating the Instance , if we just put static before the function

    const Levelup = new Counter();
    console.log(Levelup.increment());

    const LevelDown = new Counter();
    console.log(LevelDown.increment())

    */

    console.log(Counter.increment())

}