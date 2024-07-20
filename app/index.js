require('dotenv').config()
const express = require('express')
const routes = require('./routes/routes')

const app = express()
app.use('/products', routes)
app.use(express.json())


const PORT = process.env.PORT || 3001

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})