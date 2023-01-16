const Employee = require("../lib/Employee");

describe("Employee", () => {
    it('should have an name, email, and id', () => {
        const employee = new Employee('Dude', 1, 'email@hostname.com');
        expect (employee.name).toEqual('Guy');
    });
});
