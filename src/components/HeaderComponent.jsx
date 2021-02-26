import React, { Component } from 'react';

class HeaderComponent extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="/employees" className="navbar-brand">Employee Management System</a>
                            <a href="/add-employee/_add" className="btn btn-light ml-4">Add New Employee</a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;