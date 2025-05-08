                                    //Generics type (create and use type based on our demand)
{

    //normal way to express array
    const Roll1 : number[] = [1,2,3,4,5,6]
    const Mentors1 : string[] = ['x','y','z']
    const Bool1 : boolean[] = [true,false]


    //Another way to declare array
    const Roll2 : Array<number> = [1,2,3,4,5,6]
    const Mentors2 : Array<string> = ['x','y','z']
    const Bool2 : Array<boolean>= [true,false]

    
    //As the part "Array<>" is similar lets do one thing make it Changeable ,using Type

    type GenericArray<T> = Array<T>; //T is a parameter that will receive the type of an array

    const Roll3 : GenericArray<number> = [1,2,3,4,5,6]
    const Mentors3 : GenericArray<string> = ['x','y','z']
    const Bool3 : GenericArray<boolean>= [true,false]



                                             //Generic In objects

        type UserVariables = {
        name:string;
        age:number;
    }

     // const user : GenericArray<{name:string,age:number}>  = [ 
        const user : GenericArray<UserVariables>  = [   //"{name:string,age:number}" whenever we are declaring the object there with its type like string,then number , we have to maintain the order
        {
            name:'munna',
            age:24
        },
        {
            name:'suraiya',
            age:'23' // read the comment thats why it is showing error age should be number
        }
    ]                               

}


{

                                            //Generic Tuple

    type GenericTuple <X,Y> = [X,Y]

    const userName : GenericTuple<string,string> = ["munna",'suraiya'];
 
    const userDetails : GenericTuple<number,{name:string,age:number,gender:string}>= [
        1234,{
            name:'munna',
            age:24,
            gender:'male'
        }]
}

