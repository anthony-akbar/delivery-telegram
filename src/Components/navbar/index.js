import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div>
                <Link to='/cart'>Cart</Link>
                <Link to='/'>Products</Link>
            </div>
        );
    }
}

export default Nav;