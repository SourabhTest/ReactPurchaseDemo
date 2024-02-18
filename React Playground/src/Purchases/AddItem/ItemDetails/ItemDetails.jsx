import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from 'react';

export default function ItemDetails(props){
  const[message,setMessage] = useState("");
  const itemDescHandler = (event) => {
    setMessage(event.target.value);
  }
  const addNewItemHandler = () => {
    props.updateItemHandler(message);
    setMessage("");
  }
  return (
    <div className='ItemDetails'>
  		<div className="row">
  			<div className="col-6">
  				<input type="text" className="form-control" id="itemDetails" value={message} onChange={itemDescHandler}></input>
  			</div>
  			<div className="col-4">
  				<button type="button" className="btn btn-success btn-sm" id="addItemBtn" onClick={addNewItemHandler}>Add Item</button>
  			</div>
  			<div className="col">
  				<button type="button" className="btn btn-close" id="closeItemBtn" onClick={props.addItemState}></button>
  			</div>
  		</div>
    </div>
  );
}