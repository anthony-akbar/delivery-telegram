import React, {Component} from 'react';
import ProductItem from "./item";

class Products extends Component {
    render() {
        console.log(this.props.data.cart)
        return (
            <div className={'row'}>
                {this.props.data.data.map((item)=><ProductItem cart={this.props.data.cart} key={item.id} {...item}/>)}
            </div>
        );
    }
}

export default Products;