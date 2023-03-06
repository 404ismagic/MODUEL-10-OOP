let Manager = require('../lib/Manager')

test ('Can create Manager object', () =>{
    let emp1 = new Manager();
    expect(typeof(emp1)).toBe('object');
});

test ('getRole returns Manager', () =>{
    let emp1 = new Manager();
    expect(emp1.getRole()).toBe('Manager');
});