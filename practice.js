// person ={
//     name: 'j',
//     lName: 's',
//     age: 25
// }

// otherPerson = {
//     name: 'q',
//     lName: 'x',
//     age: 25
// }


// const printName = ({ name, l }) => {
//     console.log(name);
// }


// const { name, age } = person;


// printName(person);
// printName(otherPerson);

const p = new Promise((resolve, reject) => {
    let a = 1 + 3;

    if(a == 2){
        resolve("Success");
    } else {
        reject("Fail");
    }
});

p.then((message) => {
    console.log("This is in the " + message);
}).catch((message) => {
    console.log("This is in the " + message);
});