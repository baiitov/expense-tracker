import React from 'react';

 export const ExpenseItem = ({date, title,price}) => {
    return (
        <div style={{width:'400px', height:'40px', border:'1px solid blue', padding:'20px'}}>
            <p>{date.toString()}</p>
            <p>{title}</p>
            <p>{price}</p>
        </div>
    );
};

