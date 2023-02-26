import React, {Component} from 'react';
import {Table} from "react-bootstrap";
import Nav from "../navbar";
import {BackButton} from "@vkruglikov/react-telegram-web-app";
import axios from "axios";
import {Navigate} from "react-router-dom";
const telegram = window.Telegram.WebApp;


class Cart extends Component {

    componentDidMount() {
        telegram.MainButton.show()
        telegram.MainButton.setParams({
            text: 'Order',
        })
        window.Telegram.WebApp.onEvent('mainButtonClicked', () => this.add())

        telegram.BackButton.show()
        window.Telegram.WebApp.onEvent('backButtonClicked', () => this.back())
    }

    back(){
        this.props.red[0]['redirect'] = false
        this.props.red[0]['back'] = true
        this.forceUpdate()
    }

    add(){

        axios.post('https://5a5f-89-237-196-157.eu.ngrok.io//api/order', this.props.cart)
        /*
        this.props.cart.map((item)=> axios.post('http://172.20.10.8:8000/api/order', item).then((res)=>{
            telegram.MainButton.setParams({
                text: res.data,
              })
        }))*/


    }


    render() {
        return (
            <>
                {!this.props.red[0]['back'] ?
                <div className={'table'}>
                    <thead>
                    <tr>
                        <th className={'col'}>№</th>
                        <th className={'col'}>Product</th>
                        <th className={'col'}>Count</th>
                        <th className={'col'}>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.cart.map((item, index)=>
                        <tr>
                            <td>{index+1}</td>
                            <td>{this.props.data.find((i) => i.id === item.id).title}</td>
                            <td>{item.count}</td>
                            <td>{item.count * this.props.data.find((i) => i.id === item.id).price}</td>
                        </tr>
                    )}
                    </tbody>
                </div> :
                    <Navigate to='/'/>
                }
            </>
        );
    }
}

export default Cart;