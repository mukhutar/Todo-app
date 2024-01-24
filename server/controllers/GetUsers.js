const express = require('express');
const router = express.Router();
const pool =require('../modals/database')
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json());

router.get("/users" , async(req,res) => {

    try {
        const getUser = await pool.query("SELECT * FROM users ")
        res.json(getUser.rows)
        
    } catch (err) {
        console.error(err.message);
        
    }

})

module.exports = router