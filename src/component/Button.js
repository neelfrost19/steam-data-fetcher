import './Button.css';
import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const styles = ['btn--primary', 'btn--outline', 'btn--test', 'btn--black'];
const sizes = ['btn--medium', 'btn--large'];


export const Button = ({
    children,
    type,
    onClick,
    style,
    size,
    })=>{

    const checkStyle = styles.includes(style) ? style : styles[0];

    const checkSize = sizes.includes(size) ? size : sizes[0];

    return(
    <Link to='' className='btn-mobile'>
        <button
        type={type}
        className={"" +checkStyle +" "+checkSize}
        onClick={onClick}
        >
            {children}
        </button>
        </Link>
    )

};