import React from 'react';

// import data
import navbarData from './data/navbar-data';

export default class NavWrapper extends React.Component {
    constructor() {
        super();

        this.state = {
            navItems: [],
        }
    }

    componentDidMount() {
        this.setState = {
            navItems: navbarData,
        }
    }

    render() {
        <div className='nav-wrapper'>
        </div>
    }
}