                                        //Generics- with -Function


                                        // Create Array With Generic
{
    //Normal Array using Function
    const array = (parameter : string) : string[] =>{
        // return ['munna'];
        return [parameter];
    }
    const result = array('munna');



    //Using Generic -> "T" means array can hold any type thats why we didn't mention the exact type
    const ArrayWithGeneric = <T>(parameter:T) : T[] =>{
        return [parameter];
    }

    const GenericArray = ArrayWithGeneric<string>('Munna');


    type ObjectDetails = {
        name:string;
        age:number;
        gender:string;
    }
    const GenericObject = ArrayWithGeneric<ObjectDetails>(
        {
            name:'munna',
            age:24,
            gender:'male'
        }
    )
    
}

// --------------------------------------------------

{
    // Create Array With Generic Tuple

    const ArrayWitTuple = <T,Q>(parameter1:T,parameter2:Q ) : [T,Q] =>{
        return [parameter1,parameter2];
    }

    const GenericArray1 = ArrayWitTuple<string,number>('Munna',1234); //with string and number


    type Object ={
        name:string;
        age:number;
    }
    const GenericArray2 = ArrayWitTuple <string,Object>('suraiya',{name:'munna',age:24});
}

//-------------------------------

{
    const addCourseToStudent = <T>(student : T)=>{
        const Course = "NLWD";
        return {
            ...student,
            Course
        }
    }

    type studentDetails ={
        name:string ;
        email: string;
    }
    const student1 = addCourseToStudent<studentDetails>({
        name:'munna',
        email:'m@gmail.com'
    })
    const student2 = addCourseToStudent<studentDetails>({
        name:'Suraiya',
        email:'s@gmail.com'
    })
}