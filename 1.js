const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
let [name, skills, scores, jsScore, reactScore] = [
    student[0],
    student[1],
    student[2],
    student[2][2],
    student[2][3],
];
console.log(name, skills, scores);
console.log(jsScore, reactScore);

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]],
];

let ans = [];
function convertArrayToObject(students) {
    students.forEach((e) => {
        ans.push({ name: e[0], skills: e[1], scores: e[2] });
    });
    return ans;
}

console.log(convertArrayToObject(students));

const student1 = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 },
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [{ skill: 'MongoDB', level: 7.5 }],
        dataScience: ['Python', 'R', 'D3.js'],
    },
};
let s = {
    frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 },
    ],
    backEnd: [
        { skill: 'Node', level: 7 },
        { skill: 'GraphQL', level: 8 },
    ],
    dataBase: [{ skill: 'MongoDB', level: 7.5 }],
    dataScience: ['Python', 'R', 'D3.js'],
};

let newStudent = { ...student1, skills: s };
// let newStudent = Object.assign({}, student1);
newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 });
newStudent.skills.backEnd.push({ skill: 'Express', level: 9 });
newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 });
newStudent.skills.dataScience.push('SQL');
console.log(JSON.stringify(student1, undefined, 4));
console.log(JSON.stringify(newStudent, undefined, 2));
