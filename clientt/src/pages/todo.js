import React, { Fragment } from 'react';
import './App.css';
import InputTodo from '../component/InputTodo';
import ListTodos from '../component/ListTodos';
// import {Routes , Route} from 'react-router-dom'


function Todo() {
  return (
    <Fragment>
      <div className='container'>
         <InputTodo/>
          <ListTodos/> 
      </div>
    </Fragment>
   
  );
}

export default Todo;


