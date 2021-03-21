import axios from "axios";

const EMPLOYEE_API_BASE_URL =
  "http://employeemanagementsystem-env.eba-rnptdhgw.us-east-2.elasticbeanstalk.com/api/v1/employees";

class EmployeeService {
  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL + "/");
  }

  getEmployeeById(employeeId) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + employeeId);
  }

  createEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL + "/", employee);
  }

  updateEmployee(employee, employeeId) {
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + employeeId, employee);
  }

  deleteEmployee(employeeId) {
    const token = localStorage.getItem("token");
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + employeeId, {
      headers: { Authorization: "Bearer " + token },
    });
  }

  // rest api call to login
  login(LoginDetails) {
    return axios.post(EMPLOYEE_API_BASE_URL + "/auth/signin", LoginDetails);
  }
}

export default new EmployeeService();

/* 

GET     /api/v1/employees/test
GET     /api/v1/employees/test/ID
POST    /api/v1/employees/test
PUT     /api/v1/employees/test/ID
DELETE  /api/v1/employees/test/ID

POST    /api/v1/employees/auth/signin

*/
