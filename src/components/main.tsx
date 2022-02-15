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
            <Hero/>
            <Skills/>
            <Portfolio/>
            <Video/>
            <Price/>
            <Contacts/>
        </main>
    )
}