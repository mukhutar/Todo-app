const express = require('express')
const router = express.Router()
const cors = require('cors')
const pool = require('../modals/database')
const app = express()

// middleware

app.use(cors());
app.use(express.json());

router.delete('/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        const DeleteTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1' , [id])
        
        res.json(`todo with id ${id} was deleted`)
    } catch (err) {
        console.error(err);
        
    }
})
module.exports = router;