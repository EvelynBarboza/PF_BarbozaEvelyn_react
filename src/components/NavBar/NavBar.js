import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>{
return (
    <nav>
        <h1>ANANDA Terapias Alternativas</h1>
        <div>
            <button>Reiki</button>
            <button>Masajes</button>
            <button>Registros Akashicos</button>
            <button>Regresiones</button>
            <button>Flores de Bach</button>
            <button>Tarot</button>
        </div>
        <CartWidget/>
    </nav>
    )
}

export default NavBar