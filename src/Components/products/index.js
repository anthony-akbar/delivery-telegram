import React, {Component} from 'react';
import ProductItem from "./item";

class Products extends Component {
    render() {
        return (
            <div className={'row'}>
                {this.props.data.map((item)=><ProductItem key={item.id} {...item}/>)}
            </div>
        );
    }
}

export default Products;