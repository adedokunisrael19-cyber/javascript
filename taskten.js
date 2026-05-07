const personal = { name: "Ngozi", age: 25 };
const professional = { role: "Developer", company: "Semicolon" };

const combined = {... personal, ...professional};
console.log(combined);