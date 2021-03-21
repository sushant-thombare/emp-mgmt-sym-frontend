import React, { Component } from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaListAlt } from "react-icons/fa";
import { RiLoginBoxFill } from "react-icons/ri";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a href="/employees" className="navbar-brand logo">
                Employee Management System
              </a>
              <a href="/add-employee/_add" className="btn btn-light ml-4">
                <IoPersonAddSharp className="mr-2" />
                Add New Employee
              </a>
              <a href="/employees" className="btn btn-light ml-4">
                <FaListAlt className="mr-2" />
                Employees List
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
