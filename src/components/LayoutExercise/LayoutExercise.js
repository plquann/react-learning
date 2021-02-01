import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import ProductsList from './ProductsList'
import Slider from './Slider'

export default class LayoutExercise extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Slider/>
                <ProductsList/>
                <Footer />
            </div>
        )
    }
}
