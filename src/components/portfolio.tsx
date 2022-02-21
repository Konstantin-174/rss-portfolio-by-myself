import React from 'react';
import img_0 from '../assets/img/portfolio-img_0.png'
import img_1 from '../assets/img/portfolio-img_1.png'
import img_2 from '../assets/img/portfolio-img_2.png'
import img_3 from '../assets/img/portfolio-img_3.png'
import img_4 from '../assets/img/portfolio-img_4.png'
import img_5 from '../assets/img/portfolio-img_5.png'

export const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="container">
                <div className="section-title">
                    <h2 className="portfolio__title">
                        Portfolio
                    </h2>
                </div>
                <div className="tags">
                    <span className="tag">Winter</span>
                    <span className="tag">Spring</span>
                    <span className="tag">Summer</span>
                    <span className="tag tag_colored">Autumn</span>
                </div>
                <div className="layout-3-column">
                    <img className="portfolio__img" src={img_0} alt="Portfolio image"/>
                    <img className="portfolio__img" src={img_1} alt="Portfolio image"/>
                    <img className="portfolio__img" src={img_2} alt="Portfolio image"/>
                    <img className="portfolio__img" src={img_3} alt="Portfolio image"/>
                    <img className="portfolio__img" src={img_4} alt="Portfolio image"/>
                    <img className="portfolio__img" src={img_5} alt="Portfolio image"/>
                </div>
            </div>
        </section>
    )
}