import React from 'react';

// import dependencies
import { Link } from 'react-router-dom';

const NavItem = (props) => {
    return (
        <Link to={props.navItem.to} className="nav-item">
            {props.navItem.item}
        </Link>
    )
}

export default NavItem;