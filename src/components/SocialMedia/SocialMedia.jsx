import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './SocialMedia.css';

export function SocialMedia() {
    return (
        <div classname="social-media-wrapper">
            <SocialIcon className="social-media-button" url="https://facebook.com/" />
            <SocialIcon className="social-media-button" url="https://youtube.com/" />
            <SocialIcon className="social-media-button" url="https://discord.gg/" />
        </div>
    );
}