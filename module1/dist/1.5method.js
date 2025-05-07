"use strict";
// inside a  object if we write any function it is called Method
let person = {
    name: 'munna',
    salary: 125000,
    addBalance(bonus = 20000) {
        return this.salary + bonus; //Object er kono property jodi ami method a use korte chai amake "this.property_name" use korte hobe
    }
};
