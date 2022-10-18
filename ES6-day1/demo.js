// 1. Create a class then represents anything you like
// 2. Create a class that extends the first class
// 3. Create a class that extends the second class
// 4. Make sure each class has at least one method and one piece of data unique to it
// 5. Create an instance of the final class

class Electronics {
  constructor(make) {
    this._make = make;
  }
  get make() {
    return `This is a ${this._make} product`;
  }
}

class Computer extends Electronics {
  constructor(make, device) {
    super(make);
    this._device = device;
  }
  get device() {
    return `The ${this._device} product is manufactured by ${this._make}`;
  }
}

class Monitor extends Computer {
  constructor(make, device, screenSize) {
    super(make, device);
    this._screenSize = screenSize;
  }
  get screenSize() {
    return `The ${this._make} ${this._device} has a screen size of ${this._screenSize} inches`;
  }
}

const myDevice = new Monitor("Samsung", "laptop", 15);
console.log(myDevice.screenSize);

// 6. Write out an example of the following syntax
// a. import/export of a function/variable from another file (both default and named)

import { myTest } from "./functions";
console.log(myTest);

// b. fat arrow function

const myFunc1 = () => {
  return "fat arrow function";
};
console.log(myFunc1());

// c. fat arrow function with default parameters

const myFunc2 = (a, b, c = "-a default parameter-") => {
  return a + " " + b + " " + c;
};
console.log(myFunc2("fat", "arrow"));

// d. object destructuring

const employee = {
  fName: "Jane",
  lName: "Smith",
  id: "456",
  dept: "sales",
  contact: {
    email: {
      profEmail: "Jane.Smith@company.com",
      persEmail: "J.Smith@home.com",
    },
  },
};

const { fName, lName, id, dept, contact } = employee;
const { profEmail, persEmail } = contact.email;

const jane = `Employee number ${id} is ${fName} ${lName} in the ${dept} department, their work email address is ${profEmail}`;
console.log(jane);

// e. array destructuring

const name = ["Paula", "Jayne", "Cavender"];

const [fName1, mName1, lName1] = name;
console.log(mName1);
