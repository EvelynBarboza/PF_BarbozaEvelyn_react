const productos = [
    {id:'1',
    name: 'Terapia de Reiki',
    price: 800,
    category: 'Terapia energetica',
    img: 'https://www.saludnews24.com/noticia/salud/19406-el-reiki-ahora-tiene-explicacion-cientifica/',
    stock: 20,
    description: 'Terapia alternativa energetica',
},
{id:'2', name: 'Registros Akashicos', price: 1900, category: 'Terapia energetica', img: 'https://www.saludnews24.com/noticia/salud/19406-el-reiki-ahora-tiene-explicacion-cientifica/', stock: 20, description: 'Terapia alternativa energetica'},
{id:'3', name: 'Regresiones', price: 2500, category: 'Terapia energetica', img: 'https://www.saludnews24.com/noticia/salud/19406-el-reiki-ahora-tiene-explicacion-cientifica/', stock: 10, description: 'Terapia de regresion a vidas pasadas o a la niñez'},
]

export const getProducts =() => {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products)
    }, 500)
    })
}

export const getProductById =(productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id ===productId))
        }, 500)
    })
}