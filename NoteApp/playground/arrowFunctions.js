var square = (x) => x*x;

console.log(square(3));

var user = {
    name: "Andrew",
    sayHi: () => {
        console.log(`Hi ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi ${this.name}`);
    }
};
debugger;


user.sayHi();
user.sayHiAlt(1,2,3);
