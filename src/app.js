import express from 'express';
import ProductManager from './managers/ProductManager.js';

const PORT = 8080

const app = express();

app.use(express.urlencoded({ extended: true }))

const path = './src/files/products.json';

const manager = new ProductManager(path)

// app.listen(PORT, ()=>{
//     console.log(`Server listening on ${PORT}`)
// })

let producto2 = {
    title : 'producto prueba 2',
    description : 'Esto es un producto prueba 2',
    price : 2000,
    thumbnail : 'Sin imagen',
    code : 'abc122',
    stock : 25
}

let producto3 = {
    title : 'producto prueba 3',
    description : 'Esto es un producto prueba 3',
    price : 300,
    thumbnail : 'Sin imagen',
    code : 'abc121',
    stock : 25
}

let producto4 = {
    title : 'producto prueba 4',
    description : 'Esto es un producto prueba 4',
    price : 400,
    thumbnail : 'Sin imagen',
    code : 'abc124',
    stock : 25
}

let producto5 = {
    title : 'producto prueba 5',
    description : 'Esto es un producto prueba 5',
    price : 500,
    thumbnail : 'Sin imagen',
    code : 'abc125',
    stock : 25
}

let producto6 = {
    title : 'producto prueba 6',
    description : 'Esto es un producto prueba 6',
    price : 600,
    thumbnail : 'Sin imagen',
    code : 'abc126',
    stock : 25
}

let producto7 = {
    title : 'producto prueba 7',
    description : 'Esto es un producto prueba 7',
    price : 700,
    thumbnail : 'Sin imagen',
    code : 'abc127',
    stock : 25
}

let producto8 = {
    title : 'producto prueba 8',
    description : 'Esto es un producto prueba 8',
    price : 800,
    thumbnail : 'Sin imagen',
    code : 'abc128',
    stock : 25
}

let producto9 = {
    title : 'producto prueba 9',
    description : 'Esto es un producto prueba 9',
    price : 900,
    thumbnail : 'Sin imagen',
    code : 'abc129',
    stock : 25
}

let producto10 = {
    title : 'producto prueba 10',
    description : 'Esto es un producto prueba 10',
    price : 1000,
    thumbnail : 'Sin imagen',
    code : 'abc130',
    stock : 25
}



// let productos = await manager.addProduct(producto2)
// productos = await manager.addProduct(producto3)
// productos = await manager.addProduct(producto4)
// productos = await manager.addProduct(producto5)
// productos = await manager.addProduct(producto6)
// productos = await manager.addProduct(producto7)
// productos = await manager.addProduct(producto8)
// productos = await manager.addProduct(producto9)
// productos = await manager.addProduct(producto10)
    


