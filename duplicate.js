let employees = [
    { name: "Karan", department: "IT" },
    { name: "Rahul", department: "HR" },
    { name: "Ankit", department: "IT" },
    { name: "Priya", department: "Finance" },
    { name: "Karan", department: "HR" }
];

let employee = new Set();
const dup = []

for(let user of employees)
{
    if(employee.has(user.name)){
        dup.push(user);
    }
    else{
        employee.add(user.name)
    }
}

console.log(dup)