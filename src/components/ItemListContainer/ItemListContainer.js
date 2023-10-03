import { useState } from "react"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    useEfect (() => {
        getProducts()
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])


    return (
        <div>
            <h1>{greeting} </h1>
            <itemList products={products}/>
        </div>
    )
}
export default ItemListContainer