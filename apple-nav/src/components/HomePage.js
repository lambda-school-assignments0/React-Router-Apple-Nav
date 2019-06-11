import React from 'react';

// import components
import NavWrapper from './NavBar/NavWrapper';
import SubNavWrapper from './NavBar/SubNavWrapper';

class HomePage extends React.Component {
    render() {
        return (
            <div className='home-page'>
                <div className='nav'>
                    <NavWrapper selectedNav={this.props.selectedNav} handleSelectNav={this.props.handleSelectNav} />
                </div>
                <div className='subnav'>
                    <SubNavWrapper selectedNav={this.props.selectedNav} />
                </div>
            </div>
        );
    };
}

export default HomePage;