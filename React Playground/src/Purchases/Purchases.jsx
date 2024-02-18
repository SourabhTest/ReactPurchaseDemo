import React from 'react';
import ReactDOM from 'react-dom/client';
import Purchase from './Purchase/Purchase';
import AddItem from './AddItem/AddItem';


export default function Purchases(props){
  return (
    <div className='Purchases'>
      <h1>Purchases</h1>
      <AddItem updateItemHandler={props.updateItemHandler}/>
      {props.values.map((item,index) => <Purchase item={item} key={item + index}/>)}
    </div>
  );
}