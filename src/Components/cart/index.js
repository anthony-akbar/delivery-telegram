import React, {Component} from 'react';
import {Table} from "react-bootstrap";
import Nav from "../navbar";
import {BackButton} from "@vkruglikov/react-telegram-web-app";
import axios from "axios";
import {Navigate} from "react-router-dom";
const telegram = window.Telegram.WebApp;


class Cart extends Component {

    componentDidMount() {
        console.log(this.props.cart)
    }

    add(){
        const res = axios.post('http://172.20.10.8:8000/api/order', this.props.cart)
        console.log(res.data)
    }

    componentDidUpdate() {
        if(this.props.cart){

        }
    }

    render() {
        return (
            <>
                <Table>
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Product</th>
                        <th>Count</th>
                        <th>Total</th>
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
                </Table>
                <button onClick={() => {return <Navigate push to="/"/>;}}>ADD</button>
            </>
        );
    }
}

export default Cart;