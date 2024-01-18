import React, { Component } from 'react';

class Employee extends Component {

    constructor(props){
        super(props)

        this.state = {
            firstName: "Gonçalo",
            lastName: "test",
            email: "test@email.com"
        }
    }

    updateEmployee() {
        this.setState({
            firstName: "ambrosio",
            lastName: "test2",
            email: "am@email.com"
        })
    }

    render() {
        return (
            <div>
                <h1> Employee Details</h1>
                <p>{this.state.firstName}</p>
                <p>{this.state.lastName}</p>
                <p>{this.state.email}</p>
                <button onClick={() => this.updateEmployee()}>Update</button>
            </div>
        );
    }
}

export default Employee;