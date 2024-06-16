import React from 'react'

export default function OfferSection() {
    return (
        <div>
            <div className="container-fluid bg-offer my-5 py-5">
                <div className="container py-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-7 text-center">
                            <div
                                className="section-title position-relative text-center mx-auto mb-4 pb-3"
                                style={{maxWidth: 600}}
                            >
                                <h2 className="text-primary font-secondary">Special Kombo Pack</h2>
                                <h1 className="display-4 text-uppercase text-white">
                                    Super Crispy Cakes
                                </h1>
                            </div>
                            <p className="text-white mb-4">
                                Introducing our irresistible Special Kombo Pack of Super Crispy Cakes,
                                available for a limited time! Enjoy an assortment of flavors, including vanilla, chocolate, and lemon, each crafted to deliver perfect sweetness and crunch.
                                Perfect for parties, gatherings, or a personal treat, our cakes are made with the finest ingredients and baked to crispy perfection.
                                Don't miss out - grab your Special Kombo Pack today and indulge in the super crispy cake experience!
                            </p>
                            <a href="" className="btn btn-primary border-inner py-3 px-5 me-3"
                            >Shop Now</a
                            >
                            <a href="" className="btn btn-dark border-inner py-3 px-5">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
