import React, { Fragment } from 'react';
import InputTodo from '../component/InputTodo';
import ListTodos from '../component/ListTodos';


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


