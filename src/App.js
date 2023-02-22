import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import Products from "./Components/products";
import $ from 'jquery';
class App extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        console.log('Axios started...')
        var style = getComputedStyle(document.body)
        if(style.getPropertyValue('--tg-theme-bg-color') === '#ffffff'){
            $('.tg-text-color').css('color',"#17212b")
        }
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
                </div>
                <Products data={this.state.data}/>
            </div>
        );
    }
}

export default App;
