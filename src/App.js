import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import Products from "./Components/products";
import $ from 'jquery';

class App extends Component {

    state = {
        data: [],
        cart: []
    }

    componentDidMount() {
        axios.get("https://delivery.royale.uz/api/products").then((res) => {
            this.setState({data: res.data.data})
        })
    }

    render() {
        return (
            <div>
                <Products data={this.state}/>
            </div>
        );
    }
}

export default App;
