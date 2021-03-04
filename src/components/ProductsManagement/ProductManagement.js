import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import ProductsList from './ProductsList';

export default class ProductManagement extends Component {

    render() {
        return (
            <div>
                <h1 className="text-center mb-3 bg-dark text-white">Products Management with Redux</h1>
                <ProductsList />
                <ShoppingCart />
            </div>
        )
    }
}
