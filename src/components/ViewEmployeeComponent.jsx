import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
import { AiFillEdit } from 'react-icons/ai';
import { IoMdArrowRoundBack } from 'react-icons/io';


class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };
    this.editDetails = this.editDetails.bind(this);
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      this.setState({ employee: res.data });
    });
  }

  cancel() {
    this.props.history.push("/employees");
  }

  editDetails(id) {
    this.props.history.push(`/add-employee/${id}`);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 mt-4 p-4 offset-md-3 offset-md-3 bg-light">
              <h3 className="text-center mt-4 ">Employee Details</h3>
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
                      className="btn btn-warning"                      
                      onClick={ () => this.editDetails(this.state.id) }
                    >
                      <AiFillEdit className="mr-2" />
                      Edit Details
                    </button>
                    <button
                      className="btn btn-danger ml-3"
                      onClick={this.cancel.bind(this)}
                    >
                      <IoMdArrowRoundBack className="mr-2" />
                      Back
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
