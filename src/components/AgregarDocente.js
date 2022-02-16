import React, { Component } from 'react'

export default class AgregarDocente extends Component {

    state = {
        nombres: "",
        apellidos: "",
        dni: ""
    }

    createProfesor = async (e) => {
        await this.props.createProfesor(this.state)
        this.setState({
            nombres: "",
            apellidos: "",
            dni: ""
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { nombres, apellidos, dni } = this.state
        return (
            <div className="col card" style={StyleCard}>
                <h3 className='text-center'>Añadir nuevo docente</h3>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" aria-describedby="nombre" value={nombres} onChange={this.handleChange} name="nombres" />
                </div>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Apellido</label>
                    <input type="text" className="form-control" aria-describedby="apellido" value={apellidos} onChange={this.handleChange} name="apellidos" />
                </div>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Dni</label>
                    <input type="text" className="form-control" aria-describedby="dni" value={dni} onChange={this.handleChange} name="dni" />
                </div>
                <div id="emailHelp" className="form-text text-danger">user es el DNI y password 2022 + DNI</div>
                <div style={{ marginTop: "10px" }}>
                    <button className="btn btn-primary" onClick={this.createProfesor}>Crear Doncente</button>
                </div>
            </div>
        )
    }
}

const StyleCard = {
    margin: "5px",
    paddingBottom: "10px"
}
