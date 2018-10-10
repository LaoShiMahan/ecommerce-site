import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeaderNavBar extends Component {
    render() {
        return (
            <div className='header-nav-bar'>
                {
                    this.props.navBarLinks.map((link, index) => {
                        return (
                            <a className="header-nav-bar__link" key={ index } onClick={ () => console.log("Trying to switch") }>
                                { link.title }
                            </a>
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { navBarLinks } = state.headerNavBar;
    return { navBarLinks };
}

HeaderNavBar = connect(mapStateToProps)(HeaderNavBar);

export default HeaderNavBar;