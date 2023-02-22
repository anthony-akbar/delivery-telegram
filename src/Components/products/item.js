import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class ProductItem extends Component {
    render() {
        const {title, image, receipt, status, id} = this.props
        return (
            <Card className={'col-4 align-items-center text-center align-content-between'}>
                <div className={'card-img-top'}>
                    <div className={'card-img-top'}></div>
                    <Card.Img style={{borderRadius: "5rem"}} variant="top" src={"https://delivery.royale.uz/storage/" + image}/>
                </div>
                <Card.Body>
                    <span>{title}</span>
                    <span>{receipt}</span>
                    <Button variant={status === 1 ? "primary" : "danger"}>Go somewhere</Button>
                </Card.Body>
            </Card>
    );
    }
    }

    export default ProductItem;