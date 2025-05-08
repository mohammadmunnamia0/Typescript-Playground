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