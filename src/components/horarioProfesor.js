import React, { Component } from "react";

export default class HorarioProfesor extends Component {
    render() {
        if (this.props.horario == "") {
            return (<div>Aún no cuentas con horarios asignado</div>)
        }
        const {nombres, apellidos} = this.props.horario.profesor
        const horario = this.props.horario.horario
        return (<div>
            <div style={{marginTop:"30px"}}>Profesor(a): {nombres} {apellidos}</div>
            <table className="table">
                <thead>
                    <tr key="">
                        <th>Día</th>
                        <th>Hora inicio</th>
                        <th>Hora fin</th>
                        <th>Curso</th>
                        <th>Ciclo</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            horario.map((h) => {
                                return <tr key={h.id}>
                                    <td>{h.day}</td>
                                    <td>{h.time_start}</td>
                                    <td>{h.time_end}</td>
                                    <td>{h.nombre}</td>
                                    <td>{h.ciclo}</td>
                                </tr>
                            })
                        }
                    </tbody>
            </table>
        </div>
        )
    }
}
