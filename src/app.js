import express from 'express';
import ProductManager from './managers/ProductManager.js';

const PORT = 8080

const app = express();

app.use(express.urlencoded({ extended: true }))

const path = '../src/files/productos.json';

const managers = new ProductManager(path)

app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`)
})

