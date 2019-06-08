import React from 'react';

// import data
import navbarData from '../../data/navbar-data';

// import components
import NavItem from './NavItem';

export default class NavWrapper extends React.Component {
    constructor() {
        super();

        this.state = {
            navItems: [],
        }
    }

    componentDidMount() {
        this.setState({
            navItems: navbarData,
        });
    }

    render() {
        return(
            <div className='nav-wrapper'>
                {this.state.navItems.map(navItem => (
                    <NavItem navItem={navItem} />
                ))}
            </div>
        )
    }
}