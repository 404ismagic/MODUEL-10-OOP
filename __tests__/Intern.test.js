const Intern = require('../lib/Intern');
const intern = new Intern('James', '6666', 'jamebox72@yahoo.com', 'Mexico');

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('James');
    expect(intern.id).toBe('6666');
    expect(intern.email).toBe('jamesbox72@yahoo.com');
    expect(intern.school).toBe('Mexico');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('James');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('6666');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('jamesbox72@yahoo.com);
});

test('test if we can get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('Mexico');
});

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});