const Employee = require("../lib/Employee");

describe("Employee", () => {
    it('should have an name', () => {
        const employee = new Employee('Dude', 1, 'email@hostname.com');
        expect (employee.name).toEqual('Guy');
    });
    it('should have an id', () => {

    });
    it('should have an email', () => {

    });
    it('should have a role', () => {

    });

});
