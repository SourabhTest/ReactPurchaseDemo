import React from 'react';
import ReactDOM from 'react-dom/client';
import ItemDetails from './ItemDetails/ItemDetails';
import { useState } from "react";

export default function AddItem(props){
  const [newItem, addNewItem] = useState(false);
  const addItemHandler = () => {
    addNewItem((prev) => !prev);
  };
  // Log to console
  console.log(newItem)
  return (
	  <div className="AddItem">
      {newItem && <ItemDetails addItemState={addItemHandler} updateItemHandler={props.updateItemHandler}/>}
      {!newItem && <button id="addItemBtn" type="button" className="btn btn-success " onClick={addItemHandler}>+</button>}
    </div>
  );
}