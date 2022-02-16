import React from 'react';
import Player from '../assets/img/video-player.png';

export const Video = () => {
    return (
        <section id="video">
            <div className="container">
                <h2 className="video__title">
                    Video
                </h2>
                <img src={Player} alt="Video player"/>
            </div>
        </section>
    )
}