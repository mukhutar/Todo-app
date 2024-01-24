const express = require('express')
const router = express.Router()
const app = express()
const cors = require('cors')
const pool = require('../modals/database')

app.use(cors());
app.use(express.json());

// create a new todo

router.post('/', async (req, res)=>{
    try {
       const {description} = req.body;
       const NewTodo = await pool.query('INSERT INTO todo (description) VALUES($1) RETURNING *',
       [ description]);

        res.json(NewTodo.row);    
        
    } catch (err) {
       console.error(err.message); 
    }

})

module.exports = router;