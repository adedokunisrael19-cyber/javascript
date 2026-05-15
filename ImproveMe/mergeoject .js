function mergeoject(){

const personal = { name: 'Kemi', age: 27 };

const professional = { role: 'Designer', company: 'TechCorp' };
const newobject = {... personal, ...professional};
console.log(newobject)
}

mergeoject()
