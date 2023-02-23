import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import Products from "./Components/products";
import $ from 'jquery';

class App extends Component {

    state = {
        data: [],
        cart: [
            {
                'id': 2,
                'count': 1
            }
        ]
    }

    componentDidMount() {
        axios.get("https://delivery.royale.uz/api/products").then((res) => {
            this.setState({data: res.data.data})
            console.log(res.data.data)
        }).then(() => {
            console.log(this.state.data)
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
