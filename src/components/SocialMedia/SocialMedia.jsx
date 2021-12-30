import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './SocialMedia.css';

export function SocialMedia() {
    return (
        <div classname="social-media-wrapper">
            <SocialIcon className="social-media-button" url="https://twitter.com/WumszTV" />
            <SocialIcon className="social-media-button" url="https://www.youtube.com/channel/UCRUV08K-R7k4HOZEsVR4ydA" />
            <SocialIcon className="social-media-button" url="https://discord.gg/YyanYZKnxP" />
        </div>
    );
}