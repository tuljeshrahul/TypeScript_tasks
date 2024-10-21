interface empdept{
    name:string;
    dept:number;
    salary:number;
}

function createempdept(name: string, dept: number, salary: number): empdept {
    return {
        name,
        dept,
        salary
    };
}

function findEmpDept(empdept: empdept[], dept: number): empdept[] {
    console.log("Total Salary of dept "+dept+" is "+empdept.filter(emp=>emp.dept==dept).reduce((n1,n2)=> n1+n2.salary,0));
    return empdept.filter(emp => emp.dept === dept);
}

let empdept1=createempdept("John", 1, 10000);
let empdept2=createempdept("Prashanth", 2, 20000);
let empdept3=createempdept("Raj", 1, 30000);
let empdept4=createempdept("Ravi", 2, 40000);

console.log(findEmpDept([empdept1,empdept2,empdept3,empdept4],2));