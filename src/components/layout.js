import React, { Component } from 'react';
import Header from './headerNav/header';
import HeaderNavBar from './headerNav/headerNavBar';

class Layout extends Component {
    render() {
        return (
            <div className='layout'>
                <Header />
                <HeaderNavBar />
                { this.props.children }    
            </div>
        );
    }
}

export default Layout;