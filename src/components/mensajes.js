import React, { Component } from 'react'

export default class Mensajes extends Component {

    state = {
        "msg": ""
    }

    // static getDerivedStateFromProps(props, state){  
    //     if (props.msg != state.msg) {
    //         setTimeout(() => setState({msg: ""}))
    //         return {  
    //             msg: props.msg
    //         }  
    //     }  
    //     return null  
    // } 

    renderMsg = () => {
        const {msg} = this.props;
        if (msg === "") {
            return msg
        }

        if (this.state.ok === false) {
            setTimeout(() => this.setState({ok: true}), 5000)
            return msg;
        }
        return ""
    }
    

    render() {
        console.log("the message", this.props.msg);
        return (
            <div className='alert'>{this.state.msg}</div>
        )
    }
}
