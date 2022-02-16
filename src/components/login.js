import React, { Component } from "react";

export default class Login extends Component {

    onChange = (e) => {
        this.props.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div style={StyleCenter}>
                <h2>SISTEMA DE HORARIO</h2>
                <div className="mb-3">
                    <label htmlFor="user" className="form-label">User</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="user" name="user" onChange={this.onChange}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">password</label>
                    <input type="password" className="form-control" id="exampleFormControlInput2" placeholder="password" name="password" onChange={this.onChange}/>
                </div>

                <button className="btn btn-primary" onClick={this.props.login}>login</button>
            </div>
        )
    }
}

const StyleCenter = {
    width: "30%",
    margin: "0 auto",
    marginTop: "10%"
}

