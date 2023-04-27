import { Router } from "express";
import ProductManager from "../controllers/ProductManager.js"

const product = new ProductManager()

const ProductRouter = Router()

ProductRouter.get('/', async (req, res) => {
    res.status(200).send(await product.getProducts())
})

ProductRouter.get('/:id', async (req, res) => {
    let id = req.params.id
    res.status(200).send(await product.getProductsById(id))
})

ProductRouter.post('/', async (req, res) => {
    let newProduct = req.body
    res.status(200).send(await product.addProducts(newProduct))
})

ProductRouter.delete('/:id', async (req,res) => {
    let id = req.params.id
    res.status(200).send(await product.deleteProducts(id))
})

ProductRouter.put('/:id', async(req,res) => {
    let id = req.params.id;
    let updateProduct = req.body;
    res.status(200).send(await product.updateProducts(id, updateProduct));
})

export default ProductRouter