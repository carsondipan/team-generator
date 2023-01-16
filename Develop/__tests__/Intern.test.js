const Intern = require("../lib/Intern");

describe("Intern", () => {
    it('should have a school', () => {
        const intern = new Intern('Dude', 1, 'email@hostname.com', "School");
        expect(intern.getSchool()).toEqual('School');
    });
    it('should have the role of intern', () => {
        const intern = new Intern('Dude', 1, 'email@hostname.com', "School");
        expect(intern.getRole()).toEqual('Intern');
    });
});
