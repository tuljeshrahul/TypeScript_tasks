interface employee{
    empId:number;
    name:string;
    age:number;
    salary:number;
    isExperienced:boolean;
    loan:null;
    project:undefined;
    skills:string[];
}
var id=1000;
// let emp:employee={
//     empId:Symbol("1"),
//     name:"John",
//     age:25,
//     salary:10000,
//     isExperienced:true,
//     loan:null,
//     project:undefined,
//     skills:["HTML","CSS","JS","TS"]
// }
// let emp2:employee={
//     empId:Symbol("2"),
//     name:"Prashanth",
//     age:22,
//     salary:30000,
//     isExperienced:false,
//     loan:null,
//     project:undefined,
//     skills:["HTML","CSS","JS","Java"]
// }
// // Correct usage: using different names
// let emp2A: employee = {
//     empId: Symbol('emp2A'),
//     name: "Alice",
//     age: 30,
//     salary: 50000,
//     isExperienced: true,
//     loan: null,
//     project: undefined,
//     skills: ["JavaScript", "TypeScript"]
// };

// let emp2B: employee = {
//     empId: Symbol('emp2B'),
//     name: "Bob",
//     age: 25,
//     salary: 40000,
//     isExperienced: false,
//     loan: null,
//     project: undefined,
//     skills: ["Python", "Django"]
// }

function createEmployee(name: string, age: number, salary: number, isExperienced: boolean, loan: null, project: undefined, skills: string[]): employee {
    id++;
    return {
        empId:id,
        name,
        age,
        salary,
        isExperienced,
        loan,
        project,
        skills
    };
}
let emp3=createEmployee("John", 25, 10000, true, null, undefined, ["HTML", "CSS", "JS", "TS"]);
let emp4=createEmployee("Prashanth", 22, 30000, false, null, undefined, ["HTML", "CSS", "JS", "Java"]);
console.log(emp3,emp4);