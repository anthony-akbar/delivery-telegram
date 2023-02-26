import React, {Component} from 'react';
import ProductItem from "./item";
import Nav from "../navbar";
const telegram = window.Telegram.WebApp;

class Products extends Component {

    componentDidMount() {
        telegram.BackButton.hide()
    }

    render() {
        return (
            <div className={'row'} style={{paddingLeft: '10px', paddingRight: '5px'}}>
                {this.props.data.map((item)=><ProductItem red={this.props.red} cart={this.props.cart} key={item.id} {...item}/>)}
            </div>
        );
    }
}

export default Products;