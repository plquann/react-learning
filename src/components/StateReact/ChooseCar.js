import React, { Component } from 'react'

export default class ChooseCar extends Component {
    state = {
        imgSrc: "./img/car/products/red-car.jpg"
    }
    changeColor = (color) => {
        this.setState ({
            imgSrc:`./img/car/products/${color}-car.jpg`,
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6">
                        <img className="w-100" src ={this.state.imgSrc}/>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                <button className="btn btn-danger" onClick={this.changeColor('red')}>Red Car</button>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-secondary" onClick={this.changeColor('silver')}>Sliver Car</button>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-dark" onClick={this.changeColor('red')}>Black Car</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
