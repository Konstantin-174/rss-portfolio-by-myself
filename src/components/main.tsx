import React from 'react';
import {Hero} from "./hero";
import {Skills} from "./skills";
import {Portfolio} from "./portfolio";
import {Video} from "./video";
import {Price} from "./price";
import {Contacts} from "./contacts";

export const Main = () => {
    return (
        <main>
            <div className="container">
                <Hero/>
                <Skills/>
                <Portfolio/>
                <Video/>
                <Price/>
                <Contacts/>
            </div>
        </main>
    )
}