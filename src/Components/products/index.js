import React, {Component} from 'react';
import ProductItem from "./item";

class Products extends Component {
    render() {
        return (
            <div className={'row'} style={{paddingLeft: '10px', paddingRight: '5px'}}>
                {this.props.data.data.map((item)=><ProductItem cart={this.props.data.cart} key={item.id} {...item}/>)}
            </div>
        );
    }
}

export default Products;