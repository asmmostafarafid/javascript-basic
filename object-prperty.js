const students = [
    {id:5, name:"Arif"},
    {id:7, name: "Arafat"},
    {id:4, name:"fiha"},
    {id:2, name: "nhifo"}
];
const ids = students.map(i=> i.name)
console.log(ids);

const demo = students.filter(i=> i.id<9)
console.log(demo);