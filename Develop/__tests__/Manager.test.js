const Manager = require("../lib/Manager");

describe("Manager", () => {
    it('should have an officeNumber', () => {
        const manager = new Manager('Dude', 1, 'email@hostname.com', 123);
        expect(manager.getOfficeNumber()).toEqual(123)
    });
    it('should have the role of Manager', () => {
        const manager = new Manager ('Dude', 1, 'email@hostname.com', 123);
        expect(manager.getRole()).toEqual('Manager');
    });
});

