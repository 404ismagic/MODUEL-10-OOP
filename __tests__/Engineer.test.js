let Engineer = require('../lib/Engineer')

test ('Can create Engineer object', () =>{
    let emp1 = new Engineer();
    expect(typeof(emp1)).toBe('object');
});

test ('getRole returns Engineer', () =>{
    let emp1 = new Engineer();
    expect(emp1.getRole()).toBe('Engineer');
});