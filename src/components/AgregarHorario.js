import React, { Component } from 'react'

export default class AgregarHorario extends Component {
    state = {
        docentes: [],
        cursos: [],
        horario: { day: "", time_start: "", time_end: "", id_profesor: "", id_curso: "" }
    }

    async componentDidMount() {
        const docentes = await this.traerDocentes()
        const cursos = await this.traerCursos()
        this.setState({
            docentes: docentes,
            cursos: cursos
        })
    }

    traerDocentes = async () => {
        const response = await fetch("http://localhost:8000/api/docentes")
        const data = await response.json()
        if (data.estado) {
            return data.user
        }
        return []
    }

    traerCursos = async () => {
        const response = await fetch("http://127.0.0.1:5000/api/cursos")
        const data = await response.json()
        if (data.estado) {
            return data.data
        }
        return []
    }

    handleChange = (e) => {
        this.setState((old_state) => {
            old_state.horario[e.target.name] = e.target.value;
            return {
                horario: old_state.horario
            }
        })
        console.log("estado:", this.state.horario)
    }

    createHorario = (e) => {
        this.props.createHorario(this.state.horario)
    }

    render() {
        const { docentes, cursos } = this.state;
        const { day, time_start, time_end, id_profesor, id_curso } = this.state.horario;
        const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
        return (
            <div className="col card" style={StyleCard}>
                <h3 className='text-center'>Asignar Horario</h3>
                <label className='form-label'>Docente</label>
                <select className="form-select" name="id_profesor" onChange={this.handleChange} value={id_profesor}>
                    <option value={{value:id_profesor, label:id_profesor}}>seleccione docente...</option>
                    {
                        docentes.map((d) => {
                            return <option value={d.id} key={d.id}>
                                {d.nombres} {d.apellidos} - UDH
                            </option>
                        })
                    }
                </select>


                <label className='form-label'>Curso</label>
                <select className="form-select" name="id_curso" onChange={this.handleChange} value={id_curso}>
                    <option value={{value: id_curso, label:id_curso }}>seleccion curso...</option>
                    {
                        cursos.map((c) => {
                            return <option value={c.id} key={c.id}>
                                {c.nombre}, ciclo: {c.ciclo }
                            </option>
                        })
                    }
                </select>
                <div>
                    <label className='form-label'>Dia</label>
                    <select className='form-select' onChange={this.handleChange} name="day" value={day}>
                        <option value={{value: day, label: day}} key="1">seleccions dia...</option>
                        {
                            dias.map((d, i) => <option value={d} key={i}>{d}</option>)
                        }
                    </select>
                </div>

                <div>
                    <label className='form-label'>Hora Inico</label>
                    <input className="form-control" type="time" name="time_start" onChange={this.handleChange} value={time_start}/>
                    <label className='form-label'>Hora Fin</label>
                    <input className="form-control" type="time" name="time_end" onChange={this.handleChange} value={time_end}/>
                </div>

                <div style={{ marginTop: "10px" }} className="text-center">
                    <button className="btn btn-primary" onClick={this.createHorario}>Guardar Horario</button>
                </div>
            </div>
        )
    }
}

const StyleCard = {
    margin: "5px",
    paddingBottom: "10px"
}

