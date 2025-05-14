{
    //Normal working of map

    const arrayOfNumber : number[] = [1,2,3,4];

    //lets convert this number array in to string using map

    const arrayOfString = arrayOfNumber.map((number)=> number.toString());
    console.log(arrayOfString);

    

}

{
    type NumberVariable = {
        height: number;
        width: number;
    }

    type Age = NumberVariable['height']; //look up type , we just assign the hight type "number" in to the age. -> hover on Age.

    /*
        // see same variables but different type , we can make the StringVariable using Map , so that we don't need to write it manually   height: string; width: string;

        type StringVariable1 = { 
            height: string;
            width: string;
        }
    */    

    type StringVariable2 ={
        [key in "height" | "width" ] : string ; //"key in" helps to turn those two into string type
    }

      type StringVariable3 ={
        [key in keyof NumberVariable ] : string ; //"key in" helps to turn those two into string type , but this time we use "keyof help to get all the values from NumberVariable". -> Hover on StringVariable3.
    }

/*----------------------With Error-------------------------------*/ 

    type StringVariable4<T> ={
            [key in keyof NumberVariable ] : string ; 
    }

    const area1 : StringVariable4<{height:string; width:number}> = {
        height : "1000",
        width : 100, // this one is number type , but we are tying to assign it in to string ,check the StringVariable4 hover on StringVariable4 and also check return type 
    }

/*----------------------Lets Solve the Problem in StringVariable4-------------------------------*/ 

 type StringVariable5<T> ={
            [key in keyof T ] : T[key] ; //key of T is getting the type from the "StringVariable4<{height:string; width:number}>" , and it will return all the type comes from T , right? and all the types are also in the key , because key is keyof T, thats why we return T[Key]
    }

    const area2 : StringVariable5<{height:string; width:number}> = {
        height : "1000",
        width : 100, // this one is number type , but we are tying to assign it in to string ,check the StringVariable4 hover on StringVariable4 and also check return type 
    }

}