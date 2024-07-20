const { connectToDB, disconnectFromMongoDB } = require("../../mongodb")

const getAllProduct = (async (req, res) => {
    try {
        const client = await connectToDB()
        const db = client.db('tp-untref').collection('products');
        const products = await db.find().toArray()
        if (products.length) {
            return res.status(200).json(products)
        }
        return res.status(404).json({ message: 'No se encontraron recursos' })

    } catch (error) {
        return res.status(500).send(error.message)
    } finally {
        await disconnectFromMongoDB();
    }

})

const getProductById = (async (req, res) => {
    try {
        const client = await connectToDB()
        const db = client.db('tp-untref').collection('products');
        const { id } = req.params

        const productById = await db.findOne({ codigo: { $eq: parseInt(id) } })
        if (productById) {
            return res.status(200).json(productById)
        }
        return res.status(404).json({ message: `No se encontro ningún producto con el código ${id}` })
    } catch (error) {
        return res.status(500).send(error.message)
    } finally {
        await disconnectFromMongoDB();
    }
})

const getProductByName = (async (req, res) => {
    try {
        const client = await connectToDB()
        const db = client.db('tp-untref').collection('products');
        const { name } = req.params

        const productByName = await db.findOne({ nombre: { $regex: new RegExp(name, 'i') } })
        if (productByName) {
            return res.status(200).json(productByName)
        }
        return res.status(404).json({ message: `No se encontro ningún producto con el nombre ${name}` })
    } catch (error) {
        return res.status(500).send(error.message)
    } finally {
        await disconnectFromMongoDB();
    }
})

const createProduct = (async (req, res) => {
    try {
        const client = await connectToDB()
        const db = client.db('tp-untref').collection('products');
        let product = req.body

        const productById = await db.findOne({ nombre: { $regex: new RegExp(product.nombre, 'i') } })
        if (productById) {
            return res.status(400).json({ message: `Ya existe un producto con el nombre ${product.nombre}` })
        }

        product.codigo = parseInt(Math.random() * 10000)

        let newProduct = await db.insertOne(product);
        if (!newProduct) {
            return res.status(400).json({ message: `Error al crear el producto` })
        }
        return res.status(201).json(`Se creo el producto con el código ${product.codigo} satisfactoriamente`)
    } catch (error) {
        return res.status(500).send(error.message)
    } finally {
        await disconnectFromMongoDB();
    }
})

const editProduct = (async (req, res) => {
    try {
        const client = await connectToDB()
        const db = client.db('tp-untref').collection('products');
        let { code } = req.params
        const product = req.body;

        const productUpdate = await db.updateOne({ codigo: parseInt(code) }, { $set: product });

        if (productUpdate.matchedCount === 0) {
            return res.status(400).json({ message: `Error al modificar el producto` })
        }
        return res.status(201).json(`Se modificó el precio satisfactoriamente`)
    } catch (error) {
        return res.status(500).send(error.message)
    } finally {
        await disconnectFromMongoDB();
    }
})


const deleteProduct = (async (req, res) => {
    try {
        const client = await connectToDB()
        const db = client.db('tp-untref').collection('products');
        let { code } = req.params
        const product = req.body;

        const productUpdate = await db.updateOne({ codigo: parseInt(code) }, { $set: product });

        if (productUpdate.matchedCount === 0) {
            return res.status(400).json({ message: `Error al modificar el producto` })
        }
        return res.status(201).json(`Se modificó el precio satisfactoriamente`)
    } catch (error) {
        return res.status(500).send(error.message)
    } finally {
        await disconnectFromMongoDB();
    }
})
module.exports = {
    getAllProduct,
    getProductById,
    getProductByName,
    editProduct,
    createProduct,
    deleteProduct
}