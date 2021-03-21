import React, { Component } from "react";
import { toast } from "react-toastify";
import EmployeeService from "../services/EmployeeService";
import { IoIosSave } from "react-icons/io";
import { MdCancel } from "react-icons/md";

class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      emailId: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
  }

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      return;
    }
    EmployeeService.getEmployeeById(this.state.id)
      .then((res) => {
        let employee = res.data;
        this.setState({
          firstName: employee.firstName,
          lastName: employee.lastName,
          emailId: employee.emailId,
        });
      })
      .catch((err) => {
        toast.error("Server is down!");
      });
  }

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    if (!this.state.firstName || !this.state.lastName || !this.state.emailId) {
      toast.error("All fields are mandatory!");
      return;
    }
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    console.log("employee => " + JSON.stringify(employee));

    // step 5
    if (this.state.id === "_add") {
      EmployeeService.createEmployee(employee)
        .then((res) => {
          this.props.history.push("/employees");
          toast.success("Employee details added successfully!");
        })
        .catch((err) => {
          toast.error(
            "Something went wrong! Unable to store employee details!"
          );
        });
    } else {
      EmployeeService.updateEmployee(employee, this.state.id)
        .then((res) => {
          this.props.history.push("/employees");
          toast.success("Employee details updated successfully!");
        })
        .catch((err) => {
          toast.error(
            "Something went wrong! Unable to update employee details!"
          );
        });
    }
  };

  cancel() {
    this.props.history.push("/employees");
  }

  getTitle() {
    if (this.state.id === "_add") return "Add Employee";
    else return "Update Employee";
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 mt-4 p-3 bg-light offset-md-3 offset-md-3">
              <h3 className="text-center mt-4 ">{this.getTitle()}</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> First Name: </label>
                    <input
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Last Name: </label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Email ID: </label>
                    <input
                      placeholder="Email ID"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-success"
                      onClick={this.saveOrUpdateEmployee}
                    >
                      <IoIosSave className="mr-2" />
                      Save
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={this.cancel.bind(this)}
                      style={{ marginLeft: "10px" }}
                    >
                      <MdCancel className="mr-2" />
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEmployeeComponent;
