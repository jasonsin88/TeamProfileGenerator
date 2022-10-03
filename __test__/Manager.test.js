const Manager = require('../lib/Manager');

test('Can set office number', () => {
    const officeNumber = 666;
    const manager = new Manager('Finn', 13, 'finn@email.com', officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
});

test('getRole() should return \'Manger\'', () => {
    const role = 'manager';
    const manager = new Manager('Finn', 13, 'finn@email.com', 666);
    expect(manager.getRole()).toBe(role);
});

test('Can get office number via getOfficeNumber()', () => {
    const officeNumber = 666;
    const manager = Manager('Finn', 13, 'finn@email.com', officeNumber);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
});