var square = (x) => {
    return x*x;
};

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

user.sayHi();
user.sayHiAlt(1,2,3);