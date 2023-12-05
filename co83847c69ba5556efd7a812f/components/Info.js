import React from 'react';

export default function Info() {
    return (
        <header className="info--header">
            <img src="/images/profile.JPG" alt="profile-picture" />
            <h1 className="info--name">Vincentius</h1>
            <h2 className="info--role">Frontend Developer</h2>
            <div className="info--cta">
                <a className="cta--email"
                    href="mailto: vincentius.prime@gmail.com">
                    <img src="images/Mail.svg" alt="mail-icon" />Email
                </a>
                <a className="cta--linkedin" href="https://www.linkedin.com/in/vincentius-vincentius/">
                    <img src="images/linkedin.svg" alt="linkedin-icon" />LinkedIn
                </a>
            </div>
        </header>
    )
}