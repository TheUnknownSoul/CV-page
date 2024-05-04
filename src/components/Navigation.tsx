import * as React from 'react';
import '../styles/Navigation.css'
import '../styles/AboutMeSection.css'
import '../styles/Footer.css'
import {Link} from 'react-router-dom';

export default function CenteredTabs() {
    return (
        <div className="nav-bar">
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cv">CV</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
            </ul>
        </div>
    );
}