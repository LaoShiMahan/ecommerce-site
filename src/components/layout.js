import React, { Component } from 'react';

class Layout extends Component {
    render() {
        return (
            <div className='layout'>
                <h1>Ecommerce Site</h1>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;