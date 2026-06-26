const employee = {
    name: "Karan",
    age: 22,
    address: {
        city: "Bangalore",
        pincode: 560001
    }
};


const emploee1 = employee
emploee1.name = "hubbyysann"
console.log(emploee1);
console.log(employee); //deepcopy
