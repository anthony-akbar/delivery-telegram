import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import Products from "./Components/products";
import $ from 'jquery';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Cart from "./Components/cart";

class App extends Component {

    state = {
        data: [],
        cart: [],
        red: [
            {
                'redirect': false,
                'back': false
            }
        ],
    }

    componentDidMount() {
        axios.get("https://delivery.royale.uz/api/products").then((res) => {
            this.setState({data: res.data.data})
        })
    }

    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={<Products data={this.state.data} cart={this.state.cart}
                                                                 red={this.state.red}/>}/>
                        <Route exact path='/cart' element={<Cart red={this.state.red} data={this.state.data} cart={this.state.cart}/>}/>
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}

export default App;
