import React, { Component } from "react";
import AgregarDocente from "./AgregarDocente";
import AgregarHorario from "./AgregarHorario";
import Mensajes from "./mensajes";

export default class HomeAdmin extends Component {

    state = {
        msg: "okokok"
    }

    createHorario = async (horario) => {
        try {
            const url = "http://127.0.0.1:5000/api/horario";
            const config = {
                method: 'POST',
                body: JSON.stringify(horario),
                headers: { 'Content-Type': 'application/json' }
            }

            const response = await fetch(url, config)
            const data = await response.json()
            if (data.estado) {
                alert("Horario registado corretamente")
            }
        } catch (err) {
            console.log(err)
        }

    }

    createProfesor = async (profesor) => {
        const config = {
            method: 'POST',
            body: JSON.stringify(profesor),
            headers: { 'Content-Type': 'application/json' }
        }

        const response = await fetch("http://localhost:8000/api/docentes/guardar", config)
        const data = await response.json()
        if (data.estado) {
            alert("Docente creado correctamente")
        }
    }

    render() {
        console.log("Mandando", this.state)
        return (
            <div>
                <div className="text-center">
                    <h2>bienvenido {this.props.user.user}</h2>
                </div>

                <div className="container">
                    {/* <Mensajes msg={this.state.msg}/> */}
                    <div className="row align-items-start">
                        <AgregarDocente createProfesor={this.createProfesor} />
                        <AgregarHorario createHorario={this.createHorario}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
