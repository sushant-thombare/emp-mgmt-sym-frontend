import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      employee: {}
    };
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {      
      this.setState({ employee: res.data });
    });
  }

  cancel() {
    this.props.history.push("/employees");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 mt-4 offset-md-3 offset-md-3">
              <h3 className="text-center mt-3 ">Employee Details</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Employee ID </label>
                    <input
                      placeholder="Employee ID"
                      name="id"
                      className="form-control"
                      value={this.state.employee.id}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label> First Name </label>
                    <input
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.employee.firstName}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label> Last Name </label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.employee.lastName}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label> Email ID </label>
                    <input
                      placeholder="Email ID"
                      name="emailId"
                      className="form-control"
                      value={this.state.employee.emailId}
                      disabled
                    />
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-danger"
                      onClick={this.cancel.bind(this)}
                    >
                      Back to Employee List
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

export default ViewEmployeeComponent;
