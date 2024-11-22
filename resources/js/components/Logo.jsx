import React from 'react';
import logo from '../../../public/assets/logo/lara-connect.png';

const Logo = () => {
    return (
        <a href='/'>
            <img className='cursor-pointer max-w-20' src={logo} alt="Lara connect logo" />
        </a>
    );
};

export default Logo;
