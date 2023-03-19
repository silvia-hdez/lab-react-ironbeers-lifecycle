import React from 'react';
import './Input.css'

const Input = ({type, value, onChange, id, name,
        rows, min}) => {

    const commonProps = {
        value, onChange, id, name, 
    }
            
    if (type === 'textarea') {
        return (
            <textarea className="Input" style={{height:90}} rows={rows} {...commonProps} />
        )
    }
    return (
        <input type={type} min={min} {...commonProps} className="Input"/>
    );
};

export default Input;