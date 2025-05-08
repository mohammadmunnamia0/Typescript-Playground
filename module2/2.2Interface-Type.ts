//Array,Function -> type
//object -> type | interface







{
    //type alias
    type User1 = {
        name: string;
        age:number;
    }
    type User1AlsoWithContact = User1 & {contactNum : string}; // &-> intersection

    //objects
    const user1 : User1 = {
        name:'munna',
        age:24,
    }
    const user2 : User1AlsoWithContact = {
        name:'munna',
        age:24,
        contactNum:'+88018'
    }

}



                                            //Interface
{
    interface User1 {
        name: string;
        age:number;
    }

    interface User1AlsoWithContact extends User1 {
        contactNum : string;
    }

    const user1 : User1 = {
        name:'munna',
        age:24,
    }
    const user2 : User1AlsoWithContact = { //use2 We'll get both the user 1 and also the extra information contact number , because User1AlsoWithContact it is just extend the variables or values from user 1
        name:'munna',
        age:24,
        contactNum :'+8801'
    }
}

                                        //interface in array
{
    //type
    type array1 = number[];

    const IdList1 : array1 = [1,2,3];


    //interface
    interface array2 {
        [index : number] : number
    }
    const IdList2 : array1 = [1,2,3];
}

                                        //interface in function

{
    //type
    type Add1 = (num1: number, num2:number) => number;

    const add1 : Add1 = (num1,num2) => num1+num2;


    //interface
    interface Add2 {
        (num1: number, num2:number) : number;
    }
    const add2 : Add2 = (num1,num2) => num1+num2;
}