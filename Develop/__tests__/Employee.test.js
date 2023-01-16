const Employee = require("../lib/Employee");

describe("Employee", () => {
    it('should have an name', () => {
        const employee = new Employee('Dude', 1, 'email@hostname.com');
        expect (employee.name).toEqual('Dude');
    });
    it('should have an id', () => {
        const employee = new Employee('Dude', 1, 'email@hostname.com');
        expect (employee.id).toEqual('1');
    });
    it('should have an email', () => {
        const employee = new Employee('Dude', 1, 'email@hostname.com');
        expect (employee.email).toEqual('email@hostname.com');
    });
    it('should have a role', () => {
        const employee = new Employee('Dude', 1, 'email@hostname.com');
        expect (employee.role).toEqual('Employee');
    });
});
