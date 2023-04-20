import { Link, useLocation } from "react-router-dom"

const Header = () => {
    const location = useLocation()
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
                <div className="container">
                    <img src="https://e7.pngegg.com/pngimages/939/1021/png-clipart-coworking-creativity-logo-freelancer-coworking-text-trademark.png"></img>
                    {/* <a className="navbar-brand" href="#">Bdx-Cowork</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"} aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/coworking"  className={location.pathname === "/coworking" ? "nav-link active" : "nav-link"} href="#">Espaces de Coworking</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/create-coworking"  className={location.pathname === "/create-coworking" ? "nav-link active" : "nav-link"} href="#">Créer un Coworking</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header