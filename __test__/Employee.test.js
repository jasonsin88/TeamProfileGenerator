const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Can create an employee', () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe('object');
    });

    it('Can set name', () => {
        const name = 'Finn';
        const employee = new Employee(name);
        expect(employee.name).toBe(name);
    });

    it('Can set ID', () => {
        const id = 13;
        const employee = new Employee('Finn', id);
        expect(employee.id).toBe(id);
    });

    it('Can set email', () => {
        const email = 'finn@email.com';
        const employee = new Employee('Finn', 13, email);
        expect(employee.email).toBe(email);
    });

    describe('getName', () => {
        it('Can get name by getName()', () => {
            const name = 'Finn';
            const employee = new Employee(name);
            expect(employee.getName()).toBe(name);
        });
    });

    describe('getId', () => {
        it('Can get ID by getId()', () => {
            const id = 13;
            const employee = new Employee('Finn', id);
            expect(employee.getId()).toBe(id);
        });
    });

    describe('getEmail', () => {
        it('Can get email by getEmail()', () => {
            const email = 'finn@email.com';
            const employee = new Employee('Finn', 13, email);
            expect(employee.getEmail()).toBe(email);
        });
    });

    describe('getRole', () => {
        it('Can get role by getRole()', () => {
            const role = 'Employee';
            const employee = new Employee('Finn', 13, 'finn@gmail.com');
            expect(employee.getRole()).toBe(role);
        });
    });
});