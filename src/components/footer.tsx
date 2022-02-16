import React from 'react';
import {ReactComponent as Inst} from '../assets/svg/contacts_inst.svg';
import {ReactComponent as Fb} from '../assets/svg/contacts_fb.svg';
import {ReactComponent as Twit} from '../assets/svg/contacts_twit.svg';
import {ReactComponent as Pint} from '../assets/svg/contacts_pinterest.svg';

export const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <div className="footer__git">
                    <span>©</span><span>2022</span><span>github</span>
                </div>
                <div className="footer__rss">
                    Rolling Scopes School
                </div>
                <div className="footer__icos">
                    <Inst/>
                    <Fb/>
                    <Twit/>
                    <Pint/>
                </div>
            </div>
        </footer>
    )
}