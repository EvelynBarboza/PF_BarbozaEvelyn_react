const Item = ({id, name, img, price, stock}) => {
    return (
        <article className = "CardItem">
           <header className = "Header">
            <h2 className= "ItemHeader">

            </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Disponibilidad: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <link to={'/item/${id}'} className='Option'>VER DETALLE</link>
            </footer>
        </article>
    )
}
export default Item