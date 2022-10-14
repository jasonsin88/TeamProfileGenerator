const Engineer = require('../lib/Engineer');

test('Can set GitHub account', () => {
    const gitHub = 'FinnGitHub';
    const engineer = new Engineer('Finn', 13, 'finn@email.com', gitHub);
    expect(engineer.gitHub).toBe(gitHub);
});

test('getRole() should return \'Engineer\'', () => {
    const role = 'Engineer';
    const engineer = new Engineer('Finn', 13, 'finn@email.com', 'FinnGitHub');
    expect(engineer.getRole()).toBe(role);
});

test('Can get GitHub username by getGitHub()', () => {
    const gitHub = 'FinnGitHub';
    const engineer = new Engineer('Finn', 13, 'finn@email.com', gitHub);
    expect(engineer.getGitHub()).toBe(gitHub);
});
