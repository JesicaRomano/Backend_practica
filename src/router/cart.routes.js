import { Router } from "express";
import CartManager from "../controllers/CartManager.js"

const CartRouter = Router();
const carts = new CartManager

CartRouter.post("/", async (req, res) => {
    res.status(200).send(await carts.addCarts())
})

CartRouter.get('/', async (req, res) => {
    res.status(200).send(await carts.readCarts())
})

CartRouter.get('/:id', async (req, res) => {
    res.status(200).send(await carts.getCartsById(req.params.id))
})

CartRouter.post('/:cid/products/:pid', async(req,res) => {
    let cartId = req.params.cid
    let productId = req.params.pid
    res.status(200).send(await carts.addProductInCart(cartId, productId))
})

export default CartRouter