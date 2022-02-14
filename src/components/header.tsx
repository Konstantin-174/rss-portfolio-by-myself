import React from 'react';
import {ReactComponent as Logo} from "../assets/svg/logo.svg";

export const Header = () => {
    return (
        <header className="header">
            <div className="container header__container">
                <a href="#" className="logo">
                    <Logo className="logo-svg"/>
                </a>
                <nav className="header__navigation">
                    <ul className="navigation">
                        <li className="navigation__link">Skills</li>
                        <li className="navigation__link">Portfolio</li>
                        <li className="navigation__link">Video</li>
                        <li className="navigation__link">Price</li>
                        <li className="navigation__link">Contacts</li>
                    </ul>
                </nav>
                <div className="switch-lang">
                    <span className="switch-lang__item">en </span>
                    /
                    <span className="switch-lang__item"> ru</span>
                </div>
            </div>
        </header>
    )
}