import React from 'react';
import Player from '../assets/img/video-player.png';

export const Video = () => {
    return (
        <section id="video">
            <div className="container">
                <div className="section-title">
                    <h2 className="video__title">
                        Video
                    </h2>
                </div>
                <img src={Player} alt="Video player"/>
            </div>
        </section>
    )
}