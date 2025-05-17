{
    //In guard
    type NormalUser = {
        name:string;
    }

    type AdminUser = NormalUser & {

        role : "Admin"
    }

    const getUser = (user:NormalUser|AdminUser) =>{
      /*  user. // only user.name will work here cause both type has name , not the role , role is only for the admin user. lets solve the problem using In Guard  */

      if('role' in user) { //----------- In Guard -> 'role' in user
        console.log(`Hey There im  ${user.name} and my role is ${user.role}`) // this time while i write "user."" it will suggest the role 
      }
      else{
        console.log(`Hey There im  ${user.name}`)
      }

    }

    //-----------calling the function

  /*  const user1 = getUser('Munna'); //Argument of type 'string' is not assignable to parameter of type 'NormalUser | AdminUser'.ts(2345) -> Saying  je ami to argument chai nai string ami chaisi argument hobe NormalUser | AdminUser */

     const user1 : NormalUser = { name: 'Munna'}; 
     getUser(user1); //Called the function after pass the argument in 27 number line

    //  const user1 = getUser({name : 'Munna'}); // pass the argument and called the function in one line

     const user2 = getUser({name : 'Munna', role:'Admin'}); // pass the argument and called the function in one line
}