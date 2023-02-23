import React, {Component} from 'react';
import './../../index.css';
import Card from 'react-bootstrap/Card';

class ProductItem extends Component {

    add(id) {
        this.setState({
            cart: this.props.cart.push({
                id: id['id'],
                count: 1
            })
    })
    }

    plus(id) {
        let index = this.props.cart.findIndex(item => item.id === id['id'])
        this.props.cart[index]['count'] = this.props.cart[index]['count'] + 1
        this.forceUpdate()
    }

    minus(id) {
        let index = this.props.cart.findIndex(item => item.id === id['id'])
        this.props.cart[index]['count'] = this.props.cart[index]['count'] - 1
        if(this.props.cart[index]['count'] === 0){
            delete this.props.cart[index]
            console.log(this.props.cart)
        }
        this.forceUpdate()
    }

    render() {
        const {title, image, price, status, id, cart} = this.props
        return (
            <div className={'col-4 text-center p-1'}>
                {Object.keys(this.props.cart).length === 0 ? '' : (typeof cart.find(item => item.id === id)) === 'object' ?
                <div className={'counter'}>
                    {cart.find(item => item.id === id).count}
                </div> : ''}
                <div className={'card-img-top'}>
                    <div className={'card-img-top'}></div>
                    <Card.Img style={{borderRadius: "5%"}} variant="top"
                              src={"https://delivery.royale.uz/storage/" + image}/>
                </div>
                <div className={'py-4'}>
                    <div className={'tg-text-color'}>{title}</div>
                    <div className={'tg-text-color'}>{id}</div>
                </div>
                <div className={'actions'}>
                    {cart.findIndex(item => item.id === id) >= 0 ?
                            (<div>
                                <button onClick={() => this.minus({id})} className={'tg-button btn fw-bold'}>-</button>
                                <button onClick={() => this.plus({id})} className={'tg-button btn fw-bold'}>+</button>
                            </div>) :
                        <button disabled={status !== 1} onClick={() => this.add({id})}
                                className={'tg-button btn fw-bold'}>ADD</button>

                    }

                </div>
            </div>
        );
    }
}

export default ProductItem;