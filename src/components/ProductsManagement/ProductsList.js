import React, { Component } from 'react';
import Product from './Product';

export default class ProductsList extends Component {
    arrProduct = [
        {
            code: 1,
            name: "VinSmart Live",
            screen: "AMOLED, 6.2, Full HD+",
            osVersion: "Android 9.0 (Pie)",
            frontCamera: "20 MP",
            rearCamera: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "4 GB",
            rom: "64 GB",
            price: 5700000,
            image: "./img/vsphone.jpg",
        },
        {
            code: 2,
            name: "Meizu 16Xs",
            screen: "AMOLED, FHD+ 2232 x 1080 pixels",
            osVersion: "Android 9.0 (Pie); Flyme",
            frontCamera: "20 MP",
            rearCamera: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "4 GB",
            rom: "64 GB",
            price: 7600000,
            image: "./img/meizuphone.jpg",
        },
        {
            code: 3,
            name: "Iphone XS Max",
            screen: "OLED, 6.5, 1242 x 2688 Pixels",
            osVersion: "iOS 12",
            rearCamera: "Chính 12 MP & Phụ 12 MP",
            frontCamera: "7 MP",
            ram: "4 GB",
            rom: "64 GB",
            price: 27000000,
            image: "./img/applephone.jpg",
        },
    ];

    renderListProducts = () => {
        return this.arrProduct.map((item, index) => {
            return (
                <div className="col-4" key={index}>
                    <Product product={item} />
                </div>
            )
        })
    }
    render() {
        return (
            <div className="container">
                <h2 className="text-center">Product List</h2>
                <div className="row my-3">
                    {this.renderListProducts()}
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                    </div>
                </div>
            </div>
        )
    }
}
