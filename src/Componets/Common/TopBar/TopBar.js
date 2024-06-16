import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'


export default function TopBar() {
    return (
        <div>
            <div className="container-fluid px-0 d-none d-lg-block">
                <div className="row gx-0">
                    <div className="col-lg-4 text-center bg-secondary py-3">
                        <div className="d-inline-flex align-items-center justify-content-center">
                            <FontAwesomeIcon className='bi bi-envelope fs-1 text-primary me-3' icon={faEnvelope}/>
                            <div className="text-start">
                                <h6 className="text-uppercase mb-1">Email Us</h6>
                                <span>info@example.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center bg-primary border-inner py-3">
                        <div className="d-inline-flex align-items-center justify-content-center">
                            <a href="index.html" className="navbar-brand">
                                <h1 className="m-0 text-uppercase text-white">
                                    <FontAwesomeIcon className='fa fa-birthday-cake fs-1 text-dark me-3' icon={faBirthdayCake}/> SweetCakeZone
                                </h1>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center bg-secondary py-3">
                        <div className="d-inline-flex align-items-center justify-content-center">
                            <FontAwesomeIcon className='bi bi-phone-vibrate fs-1 text-primary me-3' icon={faPhone}/>
                            <div className="text-start">
                                <h6 className="text-uppercase mb-1">Call Us</h6>
                                <span>+012 345 6789</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
