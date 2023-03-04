import React from 'react';
import { ExpenseItem } from '../expense-item/ExpenseItem';

 export const Expenses = ({data}) => {
    return (
        <div style={{width:'600px', height:'200px',border:'2px solid blue',marginLeft:'200px'}}>
            {data.map((el)=> {
                return  <ExpenseItem key={el.title} date={el.date} title={el.title} price={el.price} />
            })}
        </div>
    );
};

