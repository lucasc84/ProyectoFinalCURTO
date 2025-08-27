import "../components/css/NavBar.css"

const NavBar = () => {
    return (
        <nav className="nav-container">
            <a className= 'anchor-nav' href="">
                <img  className= 'logo'src="/logo.png" alt="logo" />
            </a>
            <a className= 'anchor-nav' href="#">Hombre</a>
            <a className= 'anchor-nav' href="#">Mujer</a>
            <a className= 'anchor-nav' href="#">Accesorios</a>
        </nav>
    )
}
export default NavBar