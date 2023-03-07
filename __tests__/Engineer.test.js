const Engineer = require('../lib/Engineer');
const engineer = new Engineer('James', '6666', 'jamesbox72@yahoo.com', 'Mongler');

test('test if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('James');
    expect(engineer.id).toBe('6666');
    expect(engineer.email).toBe('jamesbox72@yahoo.com');
    expect(engineer.githubUsername).toBe('Mongler');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('James');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('6666');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('jamesbox72@yahoo.com');
});

test('test if we can get the github username from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('Mongler');
});

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});