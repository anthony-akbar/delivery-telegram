import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import {Navigate} from "react-router-dom";
const telegram = window.Telegram.WebApp;

class Item extends Component {

    redirect() {
        this.props.red[0]['redirect'] = true
        this.props.red[0]['back'] = false
        this.forceUpdate()
    }

    componentDidMount() {
        window.Telegram.WebApp.onEvent('mainButtonClicked', () => this.redirect())
    }

    componentDidUpdate() {
        if(this.props.cart.length !== 0){
            telegram.MainButton.show()
            telegram.MainButton.setParams({
                text: 'View Order'
            })
        }else{
            telegram.MainButton.hide()
        }
        if(this.props.red['redirect']){
            telegram.MainButton.setParams({
                text: 'changed'
            })
        }
    }

    add = (id) => {
        this.props.cart.push({
            id: id,
            count: 1
        })
        this.forceUpdate()
    }

    plus = (id) => {
        this.props.cart.find((item)=> item.id === id).count += 1
        this.forceUpdate()
    }

    minus = (id) => {
        this.props.cart.find(item => item.id === id).count = this.props.cart.find(item => item.id === id).count - 1
        if (this.props.cart.find(item => item.id === id).count === 0) {
            this.props.cart.splice(this.props.cart.findIndex(item => item.id === id), 1)
            console.log('Empty')
        }
        this.forceUpdate()
    }

    render() {
        const {title, image, price, status, id, cart, red} = this.props
        return (
            <>
                { red[0]['redirect'] ? <Navigate to='/cart'/> :
                    <div className={'col-4 text-center p-1'}>
                        {typeof cart.find(item => item.id === id) === 'object' ?
                            <div className={'counter'}>
                                {cart.find((item) => item.id === id).count}
                            </div> : ''
                        }
                        <div className={'card-img-top'}>
                            <div className={'card-img-top'}></div>
                            <Card.Img style={{borderRadius: "5%"}} variant="top"
                                      src={"https://delivery.royale.uz/storage/" + image}/>
                        </div>

                        <div className={'py-4'}>
                            <div className={'tg-text-color'}>{title}</div>
                            <div className={'tg-text-color'}>{price}</div>
                        </div>
                        <div className={'actions'}>
                            {cart.findIndex(item => item.id === id) >= 0 ?
                                (<div>
                                    <button onClick={() => this.minus(id)} className={'m-1 tg-button btn fw-bold'}>-</button>
                                    <button onClick={() => this.plus(id)} className={'m-1 tg-button btn fw-bold'}>+</button>
                                </div>) :
                                <button disabled={status !== 1} onClick={() => this.add(id)}
                                        className={'tg-button btn fw-bold'}>{status === 1 ? "ADD" : "Not Available"}</button>

                            }

                        </div>
                    </div>}
            </>
        );
    }
}

export default Item;