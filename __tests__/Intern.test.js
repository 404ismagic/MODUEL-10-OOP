let Intern = require('../lib/Intern')

test ('Can create Intern object', () =>{
    let emp1 = new Intern();
    expect(typeof(emp1)).toBe('object');
});

test ('getRole returns Intern', () =>{
    let emp1 = new Intern();
    expect(emp1.getRole()).toBe('Intern');
});