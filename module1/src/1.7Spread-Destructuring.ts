{
  //from now for only practicing we will use the second brackets for every new file

  //Spread operator -> rest operator

  const bros1: string[] = ["munna", "suraiya", "love"];
  const bros2: string[] = ["munna", "suraiya", "love"];

  /* bros2.push(bros1); //Argument of type 'string[]' is not assignable to parameter of type 'string' .-> means ami push korsi full array ke ekta string er moddhe jeta possible na , amake individual string ke push korte hobe from bros2 to bros1 , tai ami spread operator use korbo . */

  bros2.push(...bros2); // "..." holo spread operator
}
