import React, {Component} from 'react';
import './../../index.css';
import Card from 'react-bootstrap/Card';
import _ from 'lodash';

class ProductItem extends Component {

    add(id) {
        this.setState({
            cart: this.props.cart.push({
                id: id,
                count: 1
            })
        })
    }

    plus(id) {
        this.props.cart.find(item => item.id === id).count = this.props.cart.find(item => item.id === id).count + 1
        this.forceUpdate()
    }

    minus(id) {
        this.props.cart.find(item => item.id === id).count = this.props.cart.find(item => item.id === id).count - 1
        if (this.props.cart.find(item => item.id === id).count === 0) {
            this.props.cart.splice(this.props.cart.findIndex(item => item.id === id), 1)
            console.log('Empty')
        }
        this.forceUpdate()
    }

    render() {
        const {title, image, price, status, id, cart} = this.props
        return (
            <div className={'col-4 text-center p-1'}>

                {typeof cart.find(item => item.id === id) === 'object' ?
                    <div className={'counter'}>
                        {cart.find(item => item.id === id).count}
                    </div> : ''
                }
                <div className={'card-img-top'}>
                    <div className={'card-img-top'}></div>
                    <Card.Img style={{borderRadius: "5%"}} variant="top" src={"https://delivery.royale.uz/storage/" + image}/>
                </div>
                <div className={'py-4'}>
                    <div className={'tg-text-color'}>{title}</div>
                    <div className={'tg-text-color'}>{price}</div>
                </div>
                <div className={'actions'}>
                    {cart.findIndex(item => item.id === id) >= 0 ?
                        (<div>
                            <button onClick={() => this.minus(id)} className={'m-3 tg-button btn fw-bold'}>-</button>
                            <button onClick={() => this.plus(id)} className={'m-3 tg-button btn fw-bold'}>+</button>
                        </div>) :
                        <button disabled={status !== 1} onClick={() => this.add(id)}
                                className={'tg-button btn fw-bold'}>{status === 1 ? "ADD" : "Not Available"}</button>

                    }

                </div>
            </div>
        );
    }
}

export default ProductItem;