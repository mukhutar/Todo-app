const express = require('express')
const router = express.Router()
const app = express()
const cors = require('cors')
const pool = require('../modals/database')

app.use(cors());
app.use(express.json());

router.get('/allTodos', async(req, res)=> {
    try {
        const Gettodo  = await pool.query('SELECT * FROM todo');

        res.json(Gettodo.rows);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).json("server error")
    }
})


module.exports = router