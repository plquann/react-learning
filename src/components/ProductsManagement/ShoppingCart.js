import React, { Component } from 'react'
import { connect } from 'react-redux';

class ShoppingCart extends Component {
    renderCart = () => {
        const { cart } = this.props;
        return cart.map((itemCart, index) => {
            return (
                <tr key={index}>
                    <td>{itemCart.code}</td>
                    <td>{itemCart.name}</td>
                    <td>
                        <img width="50" height="50" src={itemCart.image} alt={itemCart.name} />
                    </td>
                    <td className="text-center">
                        <button 
                            className="btn btn-light mr-2 border border-dark" 
                            style={{ width: '35px' }}
                            onClick={() => this.props.changeQuantity(itemCart.code, 1)}>+
                        </button>
                       {itemCart.quantity}
                        <button 
                            className="btn btn-light  ml-2 border border-dark" 
                            style={{ width: '35px' }}
                            onClick={() => this.props.changeQuantity(itemCart.code, -1)}>-
                        </button>
                    </td>
                    <td>{itemCart.price.toLocaleString()}</td>
                    <td>{(itemCart.quantity * itemCart.price).toLocaleString()}</td>
                    <td>
                        <button className="btn btn-danger" onClick={() => this.props.deleteCart(itemCart.code)}>DELETE</button>
                    </td>
                </tr>
            )
        })
    }
    render() {
        const { cart } = this.props;
        return (
            <div className="container">
                <h2 className="text-center mb-3">Shopping Cart</h2>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCart()}
                    </tbody>
                    <tfoot className="h6">
                        <tr>
                            <td colSpan="5"></td>
                            <td >Bill Total</td>
                            <td >
                                {cart.reduce((sum, item) => {
                                    return (sum += item.quantity * item.price);
                                }, 0).toLocaleString()}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer.cart,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCart: (code) => {
            dispatch({type: 'DELETE_CART', payload: code});
        }, 

        changeQuantity: (code, count) => {
            dispatch({type: 'CHANGE_QUANTITY', payload: {code, count}});
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);