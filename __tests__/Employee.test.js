const Employee = require ('../lib/Employee');
const employee = new Employee ('Joelle',"5768098",'jdeschat@gmail.com');

test('test if we can get the constructor values for the emloyee object', () ==> {
expect(employee.name).toBe('James');
expect(employee.id).toBe('6666');
expect(employee.name).toBe('jamesbox72@yahoo.com');
});

test ('test if we can get the name from the getName() method', () => {
expect(employee.getname()).toBe('James');
});

test('test if we can the id from the getID() Method', () => {
    expect(employee.getid{00.toBe('6666')})
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('jamesbox72@yahoo.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee'):
});





)



}