import React from 'react'
import aboutImg from '../../img/about.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faHeartbeat } from '@fortawesome/free-solid-svg-icons'

export default function AboutUs() {
    return (
        <div>
            <div className="container-fluid pt-5">
                <div className="container">
                    <div
                        className="section-title position-relative text-center mx-auto mb-5 pb-3"
                        style={{maxWidth: 600}}
                    >
                        <h2 className="text-primary font-secondary">About Us</h2>
                        <h1 className="display-4 text-uppercase">Welcome To CakeZone</h1>
                    </div>
                    <div className="row gx-5">
                        <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight: 400}}>
                            <div className="position-relative h-100">
                                <img
                                    className="position-absolute w-100 h-100"
                                    src={aboutImg}
                                    style={{objectFit: "cover"}}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 pb-5">
                            <h4 className="mb-4">
                                Tempor erat elitr rebum clita. Diam dolor diam ipsum erat lorem
                                sed stet labore lorem sit clita duo
                            </h4>
                            <p className="mb-5">
                                Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et
                                tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore
                                lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore
                                erat amet magna
                            </p>
                            <div className="row g-5">
                                <div className="col-sm-6">
                                    <div
                                        className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4"
                                        style ={{width: 90, height: 90}}>
                                        <FontAwesomeIcon icon={faHeartbeat} className='fa fa-heartbeat fa-2x text-white'/>
                                    </div>
                                    <h4 className="text-uppercase">100% Healthy</h4>
                                    <p className="mb-0">
                                        Labore justo vero ipsum sit clita erat lorem magna clita
                                        nonumy dolor magna dolor vero
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <div
                                        className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4"
                                        style ={{width: 90, height: 90}}
                                    >
                                        <FontAwesomeIcon icon={faAward} className="fa fa-award fa-2x text-white"/>
                                    </div>
                                    <h4 className="text-uppercase">Award Winning</h4>
                                    <p className="mb-0">
                                        Labore justo vero ipsum sit clita erat lorem magna clita
                                        nonumy dolor magna dolor vero
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
