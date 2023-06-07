import { Link } from "react-router-dom"
import { useAuth } from "./Security/AuthContext"


export default function HeaderComponent() {
    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated
    // console.log(authContext)

    function logout() {
        authContext.logout()
    }

    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">

            <nav className="navbar navbar-expand-md">
                <Link className="navbar-brand ms-2 fs-2 fw-bold" to="/welcome/{username}">ElectraTech</Link>
                <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav"
                    aria-controls="nav" aria-label="Expand Navigation">
                    <div class="navbar-toggler-icon"></div>
                </button>
                <div className="collapse navbar-collapse" id="nav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            {isAuthenticated
                                && <Link className="nav-link" to="/welcome/{username}">Home</Link>}
                        </li>
                        <li className="nav-item fs-5">
                            {isAuthenticated
                                && <Link className="nav-link" to="/todos">Todos</Link>}
                        </li>
                    </ul>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item fs-5">
                        {!isAuthenticated
                            && <Link className="btn btn-primary btn-sm" to="/login">Login</Link>}
                    </li>
                    <li className="nav-item fs-5">
                        {isAuthenticated
                            && <Link className="btn btn-dark btn-sm" to="/logout" onClick={logout}>Logout</Link>}
                    </li>
                </ul>
            </nav>

        </header>
    )
}
