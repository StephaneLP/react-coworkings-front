import { Link, useLocation } from "react-router-dom"
import logo from "../../assets/img/pngegg.png"

const Header = () => {
    const token = localStorage.getItem("jwt")
    const name = localStorage.getItem("name")
    const blnToken = (token  !== null)

    const location = useLocation()

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
                <div className="container">
                    <img className="logo" src={logo}></img>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"} aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/coworking" className={location.pathname === "/coworking" ? "nav-link active" : "nav-link"} href="#">Espaces de Coworking</Link>
                            </li>
                            {!blnToken ?
                                (
                                    <li className="nav-item">
                                        <Link to="/login" className={location.pathname === "/login" ? "nav-link active" : "nav-link"} href="#">Login</Link>
                                    </li>
                                )
                                :
                                (
                                    <li className="nav-item">
                                        <Link to="/profile" className={location.pathname === "/profile" ? "nav-link active" : "nav-link"} href="#">Mon profil : {name}</Link>
                                    </li>                                
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header