import React from 'react';
import ReactDOM from 'react-dom/client';
import Purchases from './Purchases/Purchases';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import {useState} from 'react';

export function App(props) {
  const liItems = ["Item 1","Item 2"];
  const[itemList,setItemList] = useState(liItems);
  const updateItemHandler = (newValue) => {
    setItemList([...itemList,newValue]);
  }
  return (
    <div className='App'>
      <Purchases values={itemList} updateItemHandler={updateItemHandler}/>
    </div>
  );
}

// Log to console
console.log('Hello console')