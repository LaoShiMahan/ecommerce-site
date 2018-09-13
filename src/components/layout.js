import React, { Component } from 'react';
import Header from './headerNav/header';
import HeaderNavBar from './headerNav/headerNavBar';

class Layout extends Component {
    render() {
        return (
            <div className='layout'>
                {/* {this.props.children} */}
                <Header />
                <HeaderNavBar />
            </div>
        );
    }
}

export default Layout;