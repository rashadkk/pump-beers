import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <Link className="navbar-brand" to="/">Beans Love Beers</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/favorites">Favorites</Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;