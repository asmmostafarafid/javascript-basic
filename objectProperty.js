// using object on filter 

const students = [
    { id: 21, name: 'ASM' },
    { id: 25, name: 'Maya' },
    { id: 45, name: "Rafid" },
    { id: 21, name: 'jhsiugh' },
    { id: 25, name: 'jtiwt' },
    { id: 45, name: "aiwt" }
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40); // 40 thake boro gula bigger hbe ......
const biggerOne = students.find(s => s.id > 40);
console.log(names);
console.log(ids);
console.log(bigger);
console.log(biggerOne);