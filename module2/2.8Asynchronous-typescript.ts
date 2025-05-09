                          //  Asynchronous typescript

{

    //promise

    const createPromise =()=>{
        return new Promise((resolve, reject) => {
            const data: string = "information";
            if(data){
                resolve(data)
            }
            else{
                reject('FAiled to load data')
            }
        })
    }


    //calling the promise function
    const ShowData = async()=>{
        const data = await createPromise();
        console.log(data)
    }

}

{ //same thing but different cause ai khane amara use korsi type , ki type promise amake return dibe 
    
    //promise

    const createPromise =() : Promise<string>=>{
        return new Promise<string>((resolve, reject) => {
            const data: string = "information";
            if(data){
                resolve(data)
            }
            else{
                reject('FAiled to load data')
            }
        })
    }


    //calling the promise function
    const ShowData = async() : Promise<string>=>{
        const data: string = await createPromise();
        return data;
        // console.log(data)
    }
}


//---------------------------------------------  fetch data from  Server 

{

    type Todo ={
        id:number;
        userId:number;
        title:string;
        complete:boolean;
    }

const getTodo = async() : Promise<Todo>=>{
const response = await fetch(" fetch('https://jsonplaceholder.typicode.com/todos/1')");
const data = await response.json();

return data;
// console.log(data);

}

}