const express = require('express')
const router = express.Router()
const cors = require('cors')
const pool = require('../modals/database')
const app = express()

// middleware

app.use(cors());
app.use(express.json());

router.put('/:id', async(req, res) => {
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

module.exports = router
