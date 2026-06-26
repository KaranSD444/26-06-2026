let employee = [
    { name: "Karan", department: "IT" },
    { name: "Rahul", department: "HR" },
    { name: "Ankit", department: "IT" },
    { name: "Priya", department: "Finance" },
    { name: "Riya", department: "HR" }
];

let grouped ={}


for(let i =0 ; i<employee.length;i++)
{
    let dept = employee[i].department;


    if(!grouped[dept])
    {
        grouped[dept]=[]
    }

    grouped[dept].push(employee[i])
}
console.log(grouped);

