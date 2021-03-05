import React, { Component } from 'react'

export default class Dice extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row text-center">
                    <div className="col-4 ">
                        <button className="bg-danger" style={{ border: 'none' }}>
                            <div className="p-5 bg-danger text-white w-100 h-100" style={{ fontSize: 50 }}>TÀI</div>
                        </button>
                    </div>
                    <div className="col-4 align-self-center">
                        <img  src={'./img/1.png'} alt="{'./img/1.png'}" style = {{width: '30%'}}/>
                        <img className="mx-3" src={'./img/2.png'} alt="{'./img/2.png'}" style = {{width: '30%'}}/>
                        <img  src={'./img/3.png'} alt="{'./img/3.png'}" style = {{width: '30%'}}/>
                    </div>
                    <div className="col-4">
                        <button className="bg-dark" style={{ border: 'none' }}>
                            <div className="p-5 bg-dark text-white w-100 h-100" style={{ fontSize: 50 }}>XỈU</div>
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}
