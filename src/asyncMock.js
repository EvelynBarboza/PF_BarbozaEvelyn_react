const productos = [
    {id:'1',
    name: 'Terapia de Reiki',
    price: 800,
    category: 'Terapia energetica',
    img: 'https://www.saludnews24.com/noticia/salud/19406-el-reiki-ahora-tiene-explicacion-cientifica/',
    stock: 20,
    description: 'Terapia alternativa energetica',
},
{id:'2', name: 'Registros Akashicos', price: 1200, category: 'Terapia energetica', img: 'https://www.saludnews24.com/noticia/salud/19406-el-reiki-ahora-tiene-explicacion-cientifica/', stock: 20, description: 'Terapia alternativa energetica'},
{id:'2', name: 'Regresiones', price: 2500, category: 'Terapia energetica', img: 'https://www.saludnews24.com/noticia/salud/19406-el-reiki-ahora-tiene-explicacion-cientifica/', stock: 20, description: 'Terapia alternativa energetica'},
]

export const getProducts =() => {
    return new Promise((resolve) => 
    setTimeout(() => {
        resolve(products)
    }, 500)
    )
}
