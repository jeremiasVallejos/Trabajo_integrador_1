require('dotenv').config()
const { MongoClient } = require('mongodb')

const URI = process.env.MONGODB_URI

const client = new MongoClient(URI)

const connectToDB = async () => {
    try {
        await client.connect()
        console.log('Conectado a MongoDB')
        return client
    } catch (error) {
        console.log('Error al conectar con MongoDB:', error)
        return null
    }

}

const disconnectFromMongoDB = async ()=>{
    try {
        await client.close()
        console.log('Conexion con MongoDB cerrada')
        return client
    } catch (error) {
        console.log('Error al cerrar la conexion con MongoDB:', error)
        return null
    }
}

module.exports = { connectToDB, disconnectFromMongoDB }