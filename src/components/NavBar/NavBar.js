import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>{
return (
    <nav className="NavBar">
        <link to= '/'>
         <h1>ANANDA Terapias Alternativas</h1>
         </link>
        <div className="Categories">
            <NavLink to={'/category/Reiki'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Reiki</NavLink>
            <NavLink to={'/category/Masajes'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>MAsajes</NavLink>
            <NavLink to={'/category/RegistrosAkashicos'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Registros Akashicos</NavLink>
            <NavLink to={'/category/Regresiones'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Regresiones</NavLink>
            <NavLink to={'/category/Tarot'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tarot</NavLink>
    </div>
        <CartWidget/>
    </nav>
    )
}

export default NavBar