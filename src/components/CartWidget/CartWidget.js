import './cartWidget.css'
import carrito from './assets/carrito.png'
import {useContext} from "reat" 4.1k (gzipped: 1.8k)
import {cartContext} from '../../context/CartContext'
import {link} from 'react-router-dom' 7.3k (gzipped: 3k)

const CartWidget = () => {
    const {totalQuantity} = useContext(cartContext)
    return (
        <link to='/cart' className='CartWidget'>
            <img className='cartImg' src={cart} class="carrito" alt="cart-widg"/>
            {totalQuantity}
        </link>
    )
}
export default CartWidget