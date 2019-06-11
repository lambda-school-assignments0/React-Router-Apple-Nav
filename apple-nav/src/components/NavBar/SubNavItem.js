import React from 'react';

const SubNavItem = (props) => {
    console.log(props);
    return (
        <a href='www.google.com' className="subnav-item">
            {props.subnavItem.subitem}
        </a>
    )
}

export default SubNavItem;