const Intern = require('../lib/Intern');

test('Can set school', () => {
    const school = 'New York University';
    const intern = new Intern('Finn', 13, 'finn@email.com', school);
    expect (intern.school).toBe(school);
});

test('getRole() should return \'intern\'', () => {
    const role = 'intern';
    const intern = new Intern('Finn', 13, 'finn@email.com', 'New York University');
    expect(intern.getRole()).toBe(role);
});

test('Can get school via getSchool()', () => {
    const school = 'New York University';
    const intern = new Intern('Finn', 13, 'finn@gmail.com', school);
    expect(intern.getSchool()).toBe(school);
});