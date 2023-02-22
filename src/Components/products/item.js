import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class ProductItem extends Component {
    render() {
        const {title, image, price, status, id} = this.props
        return (
            <div className={'col-4 align-items-center text-center align-content-between p-5'}>
                <div className={'card-img-top'}>
                    <div className={'card-img-top'}></div>
                    <Card.Img style={{borderRadius: "5rem"}} variant="top" src={"https://delivery.royale.uz/storage/" + image}/>
                </div>
                <div className={'py-4'} >{title} * {price}</div>
                <div className={'actions'}>
                    <button className={'tg-button btn fw-bold'}>ADD</button>
                </div>
            </div>
    );
    }
    }

    export default ProductItem;