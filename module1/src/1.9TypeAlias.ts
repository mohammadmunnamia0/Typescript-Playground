{                        // Without Type Alias
    
    const student1: {
        name: string;
        address: string;
        age:number;
        gender : string;
        contactNumber: string,
    } = {
        name: 'munna',
        address: 'dhaka',
        age:24,
        gender : 'male',
        contactNumber: '01858201032',
    }

    const student2: {
        name: string;
        address: string;
        age:number;
        gender : string;
        contactNumber: string,
    } = {
        name: 'suraiya',
        address: 'dhaka',
        age:24,
        gender : 'female',
        contactNumber: '019011808',
    }

    const student3: {
        name: string;
        address: string;
        age:number;
        gender : string;
       
    } = {
        name: 'PUPUL',
        address: 'dhaka',
        age:24,
        gender : 'female',
        
    }

}



                                        // Using Type Alias

                                        
{

    type StudentDetails = {
        name: string;
        address: string;
        age:number;
        gender : string;
        contactNumber?: string; //its optional thaktew pare karo kase abar naw thakte pare
    }


    const student1: StudentDetails = {
        name: 'munna',
        address: 'dhaka',
        age:24,
        gender : 'male',
        contactNumber: '01858201032',
    }

    const student2: StudentDetails = {
        name: 'suraiya',
        address: 'dhaka',
        age:24,
        gender : 'female',
        
    }

}