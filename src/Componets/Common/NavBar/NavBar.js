import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-0">
                <Link to="/" className="navbar-brand d-block d-lg-none">
                    <h1 className="m-0 text-uppercase text-white">
                    <FontAwesomeIcon
                     className='fa fa-birthday-cake fs-1 text-dark me-3' icon={faBirthdayCake}/>CakeZone
                    </h1>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto mx-lg-auto py-0">
                        <Link href="/" className="nav-item nav-link active">Home</Link>
                        <Link href="/" className="nav-item nav-link">About Us</Link>
                        <Link href="/" className="nav-item nav-link">Contact Us</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
