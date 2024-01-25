const express = require('express');
const router = express.Router();
const pool = require('../modals/database');
const cors = require('cors')
const app = express();    
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


app.use(express.json());
app.use(cors());


router.post('/login', async (req, res) => {
    try {
        const { user_name, password } = req.body;

        const result = await pool.query('SELECT * FROM users WHERE user_name = $1 ', [user_name]);
        const token = jwt.sign({ username: result.rows[0].user_name }, 'yoursecretkey', { expiresIn: '1h' });

  
        if (result.rows.length === 0) {
            return res.status(401).json('Invalid credentials');
        }
        const isPasswordValid = await bcrypt.compare(password, result.rows[0].password);
  
        if (!isPasswordValid) {
            return res.status(401).json('Invalid credentials');
        }
  
        res.json({ token });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
  });

  module.exports = router
  