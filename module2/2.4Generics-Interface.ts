                                    //Generics Interface (create and use type based on our demand)
{

  interface Developer<T = null, M = null> { 
    // The developer will definitely get two parameter but what if someone don't have Watch and Car ? if someone don't have the Watch or car that time it will show null so that there is a low error that is why we are using M equals to null.
    // T = Null and M = Null Means that if some someone don't have that property that time it will Show Null, but if he had that property that time it will show that as usual result
    name: string;
    computer: {
        brand:string;
        model:string;
        releaseYear:number;
    },
    smartWatch ?: T; // we don't know that all the Developer will had a smartWatch or not. thats why we will use Generic for this 
    car ?: M; // we can use as many as we want generic type
  }

  //PoorDeveloper
  const poorDeveloper : Developer<{brand:string,model:string},M> = {
    name: 'munna',
    computer: {
        brand: 'Acer',
        model: 'A4515',
        releaseYear: 2022
    },
    smartWatch : {
        brand : 'Colima',
        model : 'SE14'
    }
  }

  //RichDeveloper
    type RichDEVWatchDetails = {
            brand:string;
            model:string;
    }
    type RichDEVCarDetails ={
        brand:string;
        releaseYear : number;
    }

     const RichDeveloper : Developer<RichDEVWatchDetails,RichDEVCarDetails> = {
    name: 'Suraiya',
    computer: {
        brand: 'Hp',
        model: 'EliteBook',
        releaseYear: 2024
    },
    smartWatch : {
        brand : 'Apple Watch',
        model : 'Version 8'
    },
    car:{
        brand:'Audi',
        releaseYear : 2025
    }
  }

}

