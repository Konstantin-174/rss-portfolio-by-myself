import React from 'react';

export const Price = () => {
    return (
        <section id="price">
            <div className="container">
                <h2 className="price__title">
                    Price
                </h2>
                <div className="layout-3-column">
                    <div className="price__item">
                        <h3 className="item__title">Standard</h3>
                        <p className="item__price">500 $</p>
                        <div className="item__text">
                            <p>One location</p>
                            <p>120 photos in color</p>
                            <p>12 photos in retouch</p>
                            <p>Readiness 2-3 weeks</p>
                            <p>Make up, visage</p>
                        </div>
                        <div className="item__button">
                            <button className="button">Order shooting</button>
                        </div>
                    </div>
                    <div className="price__item">
                        <h3 className="item__title">Premium</h3>
                        <p className="item__price">700 $</p>
                        <div className="item__text">
                            <p>One or two locations</p>
                            <p>200 photos in color</p>
                            <p>20 photos in retouch</p>
                            <p>Readiness 1-2 weeks</p>
                            <p>Make up, visage</p>
                        </div>
                        <div className="item__button">
                            <button className="button">Order shooting</button>
                        </div>
                    </div>
                    <div className="price__item">
                        <h3 className="item__title">Gold</h3>
                        <p className="item__price">1000 $</p>
                        <div className="item__text">
                            <p>Three locations or more</p>
                            <p>300 photos in color</p>
                            <p>50 photos in retouch</p>
                            <p>Readiness 1 week</p>
                            <p>Make up, visage, hairstyle</p>
                        </div>
                        <div className="item__button">
                            <button className="button">Order shooting</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}