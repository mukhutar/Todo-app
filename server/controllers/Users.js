const express = require('express')
const pool = require('../modals/database')
const app = express()
const cors = require('cors')
const route = express.Router()
const bcrypt = require('bcrypt');


app.use(cors())
app.use(express.json());

route.post("/users" , async(req, res)=> {
   try {
    const {user_name , password} = req.body

    const hashedpassword = await bcrypt.hash(password, 10)
    const Singleuser = await pool.query('INSERT INTO users (user_name ,password) VALUES ($1 , $2)  RETURNING *', [user_name ,hashedpassword])
    res.json(Singleuser.rows[0])
    
   } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');

   } 
})

module.exports = route