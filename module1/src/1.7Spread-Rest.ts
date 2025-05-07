{
  //from now for only practicing we will use the second brackets for every new file

  //Spread operator -> rest operator


                                                                //   Array
  const bros1: string[] = ["munna", "suraiya", "love"];
  const bros2: string[] = ["munna", "suraiya", "love"];

  /* bros2.push(bros1); //Argument of type 'string[]' is not assignable to parameter of type 'string' .-> means ami push korsi full array ke ekta string er moddhe jeta possible na , amake individual string ke push korte hobe from bros2 to bros1 , tai ami spread operator use korbo . */

  bros2.push(...bros2); // "..." holo spread operator , aita mainly array er moddhe single single element ke niye kaj kore .
}

{
                                                                //  Object
const mentor1 = {
    typescript : "mezba",
    redux:"mir",
    dbms:"mizan"
}

const mentor2 = {
    cloud : "firoz",
    prisma:"nahid",
    next:"elish"
}

//now i wanna make a object all mentorlist, we can do it using spread operator

const mentorlist = {
    ...mentor1,
    ...mentor2
} // this is the object that will include all the mentor from mentor1 and mentor2
}



                                                                //Rest Operator

//rest operator -> create a array using all the parameter given , look i didnt declare any parameter in goodFriends , but i use all my friends name in the goodFriendsfunction and it just create a array using them , this is why we use rest "...friends" operator to creat a new array .
{
    const goodFriends =(...friends : string[])=>{
        friends.forEach((friend:string)=>{
            console.log(`Hello ${friend}`)
        })
    }
    goodFriends('suraiya','munna','tonmoy','linkon','rakib','fahim')
}