const express = require('express')
const app = express()
const cors = require('cors')
const createTodo = require('./controllers/CreateTodo')
const DeleteTodo = require('./controllers/DeleteTodo')
const updateTodo = require('./controllers/UpdateTodo')
const  getTodo = require('./controllers/GetTodo')
const users = require('./controllers/Users')
const getusers = require('./controllers/GetUsers')
const Login = require('./controllers/login')
// const bodyParser = require('body-parser');

// middleware

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());
// ROUTES//
// create a todo
app.use('/todos' , createTodo)

// get a todo
app.use('/' , getTodo )

// updating a todo
app.use('/todos' , updateTodo)

// delete a todo
app.use('/todos' , DeleteTodo)

// inserting a new user
app.use('/', users)

// get users

app.use('/', getusers)
app.use("/" , Login)

app.listen(4000 , () => {
    console.log("listening on port 4000");
})

