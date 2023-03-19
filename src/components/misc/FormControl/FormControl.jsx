import React from 'react';
import './FormControl.css'

const FormControl = ({text, htmlFor}) => {
    return (
        <div className='FormControl'>
           <label htmlFor={htmlFor}>{text}</label> 
        </div>
    );
};

export default FormControl;