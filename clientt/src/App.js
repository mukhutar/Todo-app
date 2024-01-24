import React, { Fragment } from 'react';
import {Routes , Route} from 'react-router-dom'
import Todo from './pages/todo';
import User from './pages/user';
import Sign from './pages/sign';


function App() {
  return (
    <Routes>
      <Route path='/' element = {<User/>}/>
      <Route path='/signUp' element = {<Sign/>}/>
      <Route path='/todo' element = {<Todo/>}/>
    </Routes>
  );
}

export default App;
