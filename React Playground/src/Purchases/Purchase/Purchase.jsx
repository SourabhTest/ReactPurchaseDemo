import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Purchase(props){
  return (
    <div className='Purchase'>
      <div className='row'>
        <div className='col-10'>{props.item}</div>
        <div className='col-1'><i className="bi bi-pen"></i></div>
        <div className='col-1'><i className="bi bi-trash"></i></div>
      </div>      
    </div>
  );
}