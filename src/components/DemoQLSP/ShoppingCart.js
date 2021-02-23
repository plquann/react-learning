import React, { Component } from 'react'

export default class ShoppingCart extends Component {
    render() {
        const { cart, deleteCart, increaseCart, decreaseCart } = this.props;
        return (
            <div className="container">
                <div className="">
                    <h1>Shopping Cart</h1>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Ma SP</th>
                            <th>Ten SP</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Cash Amount</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((prod, index) => {
                            return <tr key={index}>
                                <th>{prod.code}</th>
                                <th>{prod.name}</th>
                                <th><img src={prod.img} width={50} height={50} /></th>
                                <th>{prod.price}</th>
                                <th>
                                <button className="btn btn-light" onClick={() => increaseCart(prod.code)}>+</button>
                                    {prod.quantity}
                                <button className="btn btn-light" onClick={() => decreaseCart(prod.code)}>-</button>
                                </th>
                                <th>{prod.price * prod.quantity}</th>
                                <th><button className="btn btn-danger" onClick={() => deleteCart(prod.code)}>Delete</button></th>
                            </tr>
                        })}
                    </tbody>
                </table>

            </div>
        )
    }
}
