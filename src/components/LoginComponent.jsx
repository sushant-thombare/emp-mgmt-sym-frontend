import React, { Component } from "react";
import { toast } from "react-toastify";
import { IoIosSave } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import EmployeeService from "../services/EmployeeService";

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  cancel() {
    this.props.history.push("/employees");
  }

  login = (e) => {
    e.preventDefault();
    let LoginDetails = {
      username: this.state.username,
      password: this.state.password,
    };
    EmployeeService.login(LoginDetails)
      .then((response) => {
        console.log(response.data);
        toast.success("Login Successful!");
        const { token } = response.data;
        localStorage.setItem("token", token);
        this.props.history.push("/employees");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid Username or Password!");
      });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 mt-4 p-3 bg-light offset-md-3 offset-md-3">
              <h3 className="text-center mt-4 ">Admin Login</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Username: </label>
                    <input
                      placeholder="Username"
                      name="username"
                      className="form-control"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label> Password: </label>
                    <input
                      placeholder="password"
                      name="password"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="text-center">
                    <button className="btn btn-success" onClick={this.login}>
                      <IoIosSave className="mr-2" />
                      Login
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

export default LoginComponent;
