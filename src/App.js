import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import Products from "./Components/products";
import Navbars from "./Components/navbar";

class App extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        console.log('Axios started...')
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
                <Products data={this.state.data}/>
            </div>
        );
    }
}

export default App;
