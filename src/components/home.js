import React, { Component } from "react";
import HomeAdmin from "./homeAdmin";
import HomeProfesor from "./homeProfesor";

export default class Home extends Component {

    onChange = (e) => {
        this.props.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {tipo} = this.props.user;
        if (tipo == "profesor") {
            return (<div style={StyleCenter}>
                <div className="nav justify-content-end">
                    <div className="mav-link  btn btn-danger" onClick={this.props.logout}> cerrar sesion</div>
                </div>
                <HomeProfesor user={this.props.user}/>
            </div>)
        }

        if (tipo == "admin") {
            return (<div style={StyleCenter2}>
                <div className="nav justify-content-end">
                    <div className="mav-link  btn btn-danger" onClick={this.props.logout}> cerrar sesion</div>
                </div>
               <HomeAdmin user={this.props.user}/> 
            </div>)
        }
    }
}

const StyleCenter = {
    width: "60%",
    margin: "0 auto",
    marginTop: "20px"
}

const StyleCenter2 = {
    width: "80%",
    margin: "0 auto",
    marginTop: "20px"
}

