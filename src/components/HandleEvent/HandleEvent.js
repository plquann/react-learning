import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = () => {
        alert('Hello! Its me QuanKhs');
    }

    showMessage = (name) => {
        alert('Hello ' + name);
    }

    render() {
        return (
            <div>
                <button id="btnClickMe" className="btn btn-success" onClick={this.handleClick}>Click me</button>
                <button id="btnClickMe01" className="btn btn-success" onClick={this.showMessage.bind(this, "QuanKhs")}>Show Message</button>
                <br/><br/>
                <button id="btnClickMe02" className="btn btn-success" onClick={() =>{
                    this.showMessage('Quan Khs')
                }}>Show Message 02</button>
            </div>
        )
    }
}
