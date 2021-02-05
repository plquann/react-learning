import React, { Component } from 'react';
import style from './DataBinding.module.css';

export default class DataBinding extends Component {
    student = {
        id : 1,
        name : 'Quan',
    }

    renderStudent() {
        return (
            <div>
                id: {this.student.id} - Name : {this.student.name}
            </div>
        )
    }
    render() {
        const title = 'Hello! Its me, QuanKhs';
        const product = {
            name: 'Iphone 12',
            price: 1000,
            image: 'https://picsum.photos/id/237/200/300',
        }
        return (
            <div>
                {this.renderStudent()}
                <p className={`text-center ${style.textGreen}`}>abc</p>
                <p id="title">{title}</p>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={product.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.price}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}
