const Manager = require('../lib/Manager');
const manager = new Manager('James', '6666', 'jamesbox72@yahoo.com', '821');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('james');
    expect(manager.id).toBe('6666');
    expect(manager.email).toBe('jamesbox72@yahoo.com');
    expect(manager.officeNumber).toBe('821');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('James');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('6666');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('jamesbox72@yahoo.com');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('821');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});