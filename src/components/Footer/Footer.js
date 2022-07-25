import React from 'react';

const Footer = (props) => {
    return (
        <div className='footer'>
            <img src={props.img} alt="Logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer;
