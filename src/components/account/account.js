import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PurchaseHistory from './purchaseHistory';
import AccountInfo from './accountInfo';


class Account extends Component {
    componentDidMount() {
        const navBarLinks = [
            {
                _id: 0,
                title: "Purchase History",
                active: false,
                component: <PurchaseHistory />
            },
            {
                _id: 1,
                title: "Account Information",
                active: true,
                component: <AccountInfo />
            }
        ]

        this.props.setHeaderLinks([]);
        this.props.setNavBarLinks(navBarLinks);
    }

    renderContent = () => {
        let jsx;
        if(this.props.navBarLinks) {
            this.props.navBarLinks.map(link => {
                if(link.active) {
                    jsx = link.component;
                }
            });
        }
        return jsx;
    }

    render() {
        return (
            <div>
                {
                    this.renderContent()
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { headerLinks, navBarLinks } = state.headerNavBar;
    return { headerLinks, navBarLinks };
}

Account = connect(mapStateToProps, actions)(Account);

export default Account;