import React, { Component } from "react";
import { toast } from "react-toastify";
import EmployeeService from "../services/EmployeeService";
import { BsFillEyeFill } from 'react-icons/bs'
import { FaUserEdit } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'

class ListEmployeeComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
      toast.info('All employees loaded successfully!')
    });
  }

  addEmployee() {
    // step 6
    this.props.history.push("/add-employee/_add");
  }

  editEmployee(id) {
    // step 7
    this.props.history.push(`/add-employee/${id}`);
  }

  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then((res) => {
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        )
      });
      toast.success('Successfully deleted!');
    });
  }

  viewEmployee(id) {
    this.props.history.push(`/view-employee/${id}`);
  }

  render() {
    return (
      <div className="mt-4">
        <h2 className="text-center">Employees List</h2>
        <div className="row">
          <table className="table table-striped table-bordered table-hover mt-4">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => this.viewEmployee(employee.id)}
                    >
                      <BsFillEyeFill className="mr-2"/>
                      View
                    </button>
                    <button
                      className="btn btn-info  ml-3"
                      onClick={() => this.editEmployee(employee.id)}
                    >       
                        
                      <FaUserEdit className="mr-2"/>           
                      Update
                    </button>
                    <button
                      className="btn btn-danger ml-3"
                      onClick={() => this.deleteEmployee(employee.id)}
                    >
                      <AiFillDelete className="mr-2"/>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;
