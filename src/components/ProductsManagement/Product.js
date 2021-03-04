import React, { Component } from 'react';
import { connect } from 'react-redux';

class Product extends Component {
    render() {
        const { product } = this.props;
        return (
            <div className="card text-left">
                <img className="card-img-top" style={{ height: 300 }} src={product.image} alt={product.image} />
                <div className="card-body">
                    <h4 className="card-title">{product.name}</h4>
                    <p className="card-text">{product.price}</p>
                    <div className="text-center">
                        <button className="btn btn-danger" onClick={() => this.props.addCart(product)}>Add Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCart: (productClicked) => {
            const productCart = {
                ...productClicked,
                quantity: 1,
            }

            dispatch({type: 'ADD_TO_CART', payload: productCart});
        }
    }
}
export default connect(null, mapDispatchToProps)(Product);