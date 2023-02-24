import React, {Component} from 'react';
import {Table} from "react-bootstrap";
import Nav from "../navbar";
import {BackButton} from "@vkruglikov/react-telegram-web-app";
import axios from "axios";
import {useNavigate} from "react-router-dom";

class Cart extends Component {

    componentDidMount() {
        console.log(this.props.cart)
    }

    add(){
        const res = axios.post('http://172.20.10.8:8000/api/order', this.props.cart)
        console.log(res.data)
    }

    back() {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const navigate = useNavigate();
        navigate('/')
    }

    render() {
        return (
            <>
                <Nav/>
                <BackButton onClick={this.back()}/>
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
                <button onClick={this.add()}>ADD</button>
            </>
        );
    }
}

export default Cart;