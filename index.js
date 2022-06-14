const employee = {
    name: "Sam",
    streetAddress: "12 Broadway",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
};

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee [key] = value;
    return employee;
};

function deleteFromEmployeeByKey (employee, key) {
        let newEmployee = {...key};
        delete newEmployee [key];
        return newEmployee;
    };

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    let newEmployee = employee;
    delete employee[key];
    return newEmployee;
};
