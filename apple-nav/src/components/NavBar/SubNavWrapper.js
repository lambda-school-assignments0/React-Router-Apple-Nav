import React from 'react';

// import data
import navbarData from '../../data/navbar-data';

// import components
import SubNavItem from './SubNavItem';

export default class SubNavWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subnavItems: [],
        }
    }

    componentDidMount() {
        for (let i=0; i<navbarData.length; i++) {
            if (this.props.selectedNav === navbarData[i].to) {
                this.setState({
                    subnavItems: navbarData[i].subitems,
                })
            }
        }
    }

    render() {
        return(
            <div className='nav-wrapper'>
                {this.state.subnavItems.map((subnavItem, idx) => (
                    <SubNavItem subnavItem={subnavItem} key={idx} />
                ))}
            </div>
        )
    }
}