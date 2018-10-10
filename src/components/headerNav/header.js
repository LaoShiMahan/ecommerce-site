import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img src='https://via.placeholder.com/50x50'></img>
                <div className="header__links">
                    {
                        this.props.headerLinks.map((link, index) => {
                            return (
                                <a className="header__link" key={ index } onClick={ () => console.log("Trying to navigate") }>
                                    { link.title }
                                </a>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { headerLinks } = state.headerNavBar;
    return { headerLinks };
}

Header = connect(mapStateToProps)(Header);

export default Header;