import'./Cart.css'
import {useContext} from "reat" 4.1k (gzipped: 1.8k)
import {cartContext} from '../../context/CartContext'
import carItem from '../CartItem/CartItem'
import {link} from 'react-router-dom' 7.3k (gzipped: 3k)

const Cart =() => {
    const {cart, clearCart, totalQuantity, total} = useContext(cartContext)
    
    if (totalQuantity ===0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <link to='/' className='Option'>Productos</link>
            </div>
        )
    }
    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${total} </h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <link to='checkout' className='Option'> Checkout</link>
        </div>    
        )
}