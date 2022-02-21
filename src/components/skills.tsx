import React from 'react';
import {ReactComponent as Camera_ico} from "../assets/svg/skills_camera.svg";
import {ReactComponent as Video_ico} from "../assets/svg/skills_video.svg";
import {ReactComponent as Retouch_ico} from "../assets/svg/skills_retouch.svg";
import {ReactComponent as Audio_ico} from "../assets/svg/skills_audio.svg";

export const Skills = () => {
    return (
        <section id="skills">
            <div className="container">
                <div className="section-title">
                    <h2 className="skills__title">
                        Skills
                    </h2>
                </div>
                <div className="layout-4-column skills__column">
                    <div className="skill">
                        <Camera_ico className="skill__ico"/>
                        <h4 className="skill__title">Digital photography</h4>
                        <p className="skill__text">
                            High-quality photos in the studio and on the nature
                        </p>
                    </div>
                    <div className="skill">
                        <Video_ico className="skill__ico"/>
                        <h4 className="skill__title">Video shooting</h4>
                        <p className="skill__text">
                            Capture your moments so that they always stay with you
                        </p>
                    </div>
                    <div className="skill">
                        <Retouch_ico className="skill__ico"/>
                        <h4 className="skill__title">Retouch</h4>
                        <p className="skill__text">
                            I strive to make photography surpass reality
                        </p>
                    </div>
                    <div className="skill">
                        <Audio_ico className="skill__ico"/>
                        <h4 className="skill__title">Audio</h4>
                        <p className="skill__text">
                            Professional sounds recording for video, advertising, portfolio
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}