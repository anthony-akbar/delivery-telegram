import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import Products from "./Components/products";

class App extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        console.log('Axios started...')
        var style = getComputedStyle(document.body)
        this.setState({color: style.getPropertyValue('--tg-theme-button-text-color')})
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
                <div>
                    {this.state.color}
                </div>
                <Products data={this.state.data}/>
            </div>
        );
    }
}

export default App;
