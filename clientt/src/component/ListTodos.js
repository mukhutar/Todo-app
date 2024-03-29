import React , {Fragment , useEffect, useState } from 'react'
import EditTodo from './EditTodo';

function ListTodos() {

    const [todos , setTodos] = useState([])

    // deleting function

    const deleteTodo = async id => {
        try {
            const deleteTodo = await fetch(`http://localhost:4000/todos/${id}`,{
                method: "DELETE"
            }) 

            setTodos(todos.filter(todo => todo.todo_id !== id))

        } catch (err) {
            console.error(err); 
        }
    }


    const getTodos = async() => {
        try {
            const responseI = await fetch("http://localhost:4000")
            const JsonData =  await responseI.json()
           
            setTodos(JsonData)

        } catch (err) {
            console.error(err);
            
        }

    }

    useEffect (() => {
        getTodos();
    }, [])

  return (
    <Fragment>
        {""}
        <div className='container'>
        <table className="table table-hover mt-5  text-center" >
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>

        {/* {<tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>} */}

      {todos.map((todo) => {
       return <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
         
                  <EditTodo todo ={todo}/>  
                
              </td>
              <td>
                <button className='btn btn-danger'
                 onClick={() => deleteTodo(todo.todo_id)}
                >
                    Delete
                </button>
              </td>
             </tr>
      })}
    </tbody>
  </table>

        </div>
    </Fragment>
  )
}

export default ListTodos
