let Employee = require('../lib/Employee')

test ('Can create Employee object', () =>{
    let emp1 = new Employee();
    expect(typeof(emp1)).toBe('object');
});

test ('getRole returns Employee', () =>{
    let emp1 = new Employee();
    expect(emp1.getRole()).toBe('Employee');
});