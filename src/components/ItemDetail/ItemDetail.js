import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react' 4.1k (gzipped: 1.8k)
import { link } from 'react-router-dom' 7.3k (gzipped: 3k)

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded (quantity)
    }
    
    return (
        <article className = "CardItem">
           <header className = "Header">
            <h2 className= "ItemHeader">
                {name}
            </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: ${category}
                </p>
                <p className="Info">
                    Descripciòn: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <link to= '/cart' className='Option'>Terminar Compra</link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
        )
    }