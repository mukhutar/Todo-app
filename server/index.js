const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./database')

// middleware

app.use(cors());
app.use(express.json());

// ROUTES//

// create a todo

app.post('/todos', async (req, res)=>{
    try {
       const {description} = req.body;
       const NewTodo = await pool.query('INSERT INTO todo (description) VALUES($1) RETURNING *',
       [description]);

        res.json(NewTodo.row);    
        
    } catch (err) {
       console.error(err.message); 
    }

})

// get todos


app.get('/', async(req, res)=> {
    try {
        const Gettodo  = await pool.query('SELECT * FROM todo');

        res.json(Gettodo.rows);
        
    } catch (err) {
        console.error(err.message);
        
    }
})

// get a todo

app.get('/todos/:id', async(req, res)=> {
    try {
        const {id} = req.params;
        const SingleTodo = await pool.query('SELECT * FROM todo WHERE todo_id= $1 ' , [id] );

        res.json(SingleTodo.rows)
        
    } catch (err) {
        console.error(err);
        
    }
})

// updating a todo

app.put('/todos/:id', async(req, res) => {
   try {
    const {description} = req.body
    const { id } = req.params;
    const updateTodo = await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2 ' ,
    [description, id]
    )
    res.json('todo was updated');
    
   } catch (err) {
    console.error(err.message);
    
   }
})


// delete a todo

app.delete('/todos/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        const DeleteTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1' , [id])
        
        res.json(`todo with id ${id} was deleted`)
    } catch (err) {
        console.error(err);
        
    }
})

app.listen(4000 , () => {
    console.log("listening on port 5000");
})