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

      if('role' in user) { // In Guard -> 'role' in user
        console.log(`Hey There im  ${user.name} and my role is ${user.role}`) // this time while i write "user."" it will suggest the role 
      }
      else{
        console.log(`Hey There im  ${user.name}`)
      }

    }


    const user1 = getUser('Munna');
}