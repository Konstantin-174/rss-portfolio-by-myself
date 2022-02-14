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
                        <a href="#skills"><li className="navigation__link">Skills</li></a>
                        <a href="#portfolio"><li className="navigation__link">Portfolio</li></a>
                        <a href="#video"><li className="navigation__link">Video</li></a>
                        <a href="#price"><li className="navigation__link">Price</li></a>
                        <a href="#contacts"><li className="navigation__link">Contacts</li></a>
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