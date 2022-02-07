import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props){
    useState();
    const [title, setTitle] = useState(props.title)
    console.log('ExpensesItem evaluated by React');
    
    const clickheader = () => {
        setTitle('Update');
         console.log(title);
        };


    return (
<Card className='expense-item'>
    <ExpenseDate date= {props.date}/>
    <div className='expense-item__description'>
        <h2> {title} </h2>
        <div className='expense-item__price'>
            <div>{props.amount}$</div>
        </div>
        <button  onClick={clickheader}>Change Title</button>
    </div>
    </Card>
    );

}
export default ExpenseItem;