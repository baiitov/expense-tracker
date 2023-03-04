import React from 'react';

const Button = (props) => {
    return (
     <button type={props.type} onClick={props.onClick} style={{padding:'16px 16px', backgroundColor:'#4A026B', border:'none',color:'white'}}>{props.children}</button>
    );
};

export default Button;