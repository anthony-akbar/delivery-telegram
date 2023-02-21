import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class ProductItem extends Component {
    render() {
        const {title, image, receipt, status, id} = this.props
        return (
            <Card className="col-4 bg-dark text-white p-0">
                <Card.Img src={"http://delivery.royale.uz/storage/" + image} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{receipt}
                    </Card.Text>
                    <Card.Text>{status}</Card.Text>
                </Card.ImgOverlay>
            </Card>
    );
    }
    }

    export default ProductItem;