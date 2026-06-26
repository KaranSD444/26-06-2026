const user = {
    name: "Karan",
    age: null,
    city: "Bangalore",
    email: undefined,
    phone: "9876543210"
};

const result = {};

for (let key in user) {
    if (user[key] !== null && user[key] !== undefined) {
        result[key] = user[key];
    }
}

console.log(result);