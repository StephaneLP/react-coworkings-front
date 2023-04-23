import { Link, useLocation } from "react-router-dom"

const Header = () => {
    const location = useLocation()
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
                <div className="container">
                    <img className="logo" src="img/pngegg.png"></img>
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
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header