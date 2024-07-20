require('dotenv').config()
const express = require('express')
const routes = require('./app/routes/routes')

const app = express()
app.use(express.json())

app.use('/products', routes)

app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrado' });
});



const PORT = process.env.PORT || 3001

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})