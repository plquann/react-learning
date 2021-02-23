import React, { Component } from 'react';
import Product from './Product';
import DetailsProd from './DetailsProd';
import ShoppingCart from './ShoppingCart'

export default class DemoManager extends Component {
    arrProducts = [
        {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },

        {
            "maSP": 2,
            "tenSP": "Meizu 16Xs",
            "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
            "heDieuHanh": "Android 9.0 (Pie); Flyme",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 7600000,
            "hinhAnh": "./img/meizuphone.jpg"
        },

        {
            "maSP": 3,
            "tenSP": "Iphone XS Max",
            "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
            "heDieuHanh": "iOS 12",
            "cameraSau": "Chính 12 MP & Phụ 12 MP",
            "cameraTruoc": "7 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 27000000,
            "hinhAnh": "./img/applephone.jpg"
        }
    ];

    state = {
        detailsProd: {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },

        cart: [
        ],
        product: null,
    }

    handleClick = (id)=> {
        this.setState({ product: this.arrProducts.filter(sp => sp.maSP === id)[0] });
    }

    renderSP() {
        
        return (
            this.arrProducts.map((sp) => (
                <Product key={sp.maSP} sp={sp} onClick={this.handleClick} addCart={this.addCart}/>
            )
            )
        )
    }
    addCart= (prod) => {
        const item = {
            code: prod.maSP,
            name: prod.tenSP,
            img: prod.hinhAnh,
            price: prod.giaBan,
            quantity: 1,
        };
        const cartUpdate = [...this.state.cart];
        const indexItem = cartUpdate.findIndex(item => item.code === prod.maSP);
        (indexItem === -1) ? cartUpdate.push(item) : cartUpdate[indexItem].quantity += 1;
    
        this.setState({cart: cartUpdate});
    }

    deleteCart = (codeProd) => {
        const cartUpdate = [...this.state.cart];
        cartUpdate.splice(cartUpdate.findIndex(item => item.code === codeProd), 1);

        this.setState({cart: cartUpdate});
    }
    increaseCart = (codeProd) => {
        const cartUpdate = [...this.state.cart];
        cartUpdate[cartUpdate.findIndex(item => item.code === codeProd)].quantity ++;

        this.setState({cart: cartUpdate});
    }
    decreaseCart = (codeProd) => {
        const cartUpdate = [...this.state.cart];
        const indexItem = cartUpdate.findIndex(item => item.code === codeProd);

        if(--cartUpdate[indexItem].quantity){
            this.setState({cart: cartUpdate});
        }
        else{
            this.deleteCart(codeProd);
        }
    }
    render() {
        return (
            <div className="container">
                <ShoppingCart cart={this.state.cart} deleteCart={this.deleteCart} increaseCart={this.increaseCart} decreaseCart={this.decreaseCart}/>
                <div className="row mb-5">
                    {this.renderSP()}
                </div>

                <DetailsProd sp={this.state.product} />
            </div>
        )
    }
}