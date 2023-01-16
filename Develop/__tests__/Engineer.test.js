const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it('should have a GitHub', () => {
        const engineer = new Engineer('Dude', 1, 'email@hostname.com', 'gitHub');
        expect(engineer.gitHub).toEqual('gitHub')
    });
    it('should have the role of Engineer', () => {
        const engineer = new Engineer('Dude', 1, 'email@hostname.com', 'gitHub')
    });
});
