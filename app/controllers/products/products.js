const { connectToDB, disconnectFromMongoDB } = require("../../mongodb")

const getAllProduct = (async(req, res) => {
    const client = await connectToDB()
    console.log(cliente)
    const db = client.db('tp-untref')
    const products = await db.collection('products').find().toArray()

    await disconnectFromMongoDB()
    return res.json(products)
})

const getProductById = (async(req, res)=>{

})

const getProductByQuery = (async(req, res) =>{

})

const editProduct = (async(req, res) =>{

})

const createProduct = (async(req, res) =>{

})

const deleteProduct =(async(req, res)=>{

})
module.exports ={
    getAllProduct,
    getProductById,
    getProductByQuery,
    editProduct,
    createProduct,
    deleteProduct
}