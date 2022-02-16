import React, { Component } from "react";
import HorarioProfesor from "./horarioProfesor";

export default class HomeProfesor extends Component {

    state = {
        horario: ""
    }

    async componentDidMount() {
        await this.traerHorarios()
    }

    traerHorarios = async () => {
        const {id} = this.props.user
        const res = await fetch(`http://127.0.0.1:5000/api/horario/${id}`)
        const data = await res.json()
        console.log(data)
        if (data.estado) {
            this.setState({
                horario: data
            })
        }
    }

    render() {
        return (
            <div className="text-center">
                <h2>bienvenido DNI: {this.props.user.user}</h2>
                <button className="btn btn-success" onClick={this.traerHorarios}>actualizar horario</button>
                <HorarioProfesor horario={this.state.horario} />
            </div>
        )
    }
}
