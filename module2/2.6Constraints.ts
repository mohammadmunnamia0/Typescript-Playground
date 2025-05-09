                                //Constraints - USe for must input validation
{
    
    const addCourseToStudent = <T extends { id:number; name:string ; email:string;}>(student : T)=>{
        // extends mane Must "id,name,email" Lagbei Lagbe
        const Course = "NLWD";
        return {
            ...student,
            Course
        }
    }

    type studentDetails ={
        id:number;
        name:string ;
        email:string;
        age?:string;
        laptop?:boolean;

    }
    const student1 = addCourseToStudent<studentDetails>({
        id:1,
        name:'munna',
        email:'m@gmail.com'
    })
    const student2 = addCourseToStudent<studentDetails>({
        id:2,
        name:'Suraiya',
        email:'s@gmail.com'
    })
    const student3 = addCourseToStudent<studentDetails>({
        id:2,
        name:'Suraiya',
        email:'s@gmail.com'
    })
}