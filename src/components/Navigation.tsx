import * as React from 'react';
import '../styles/Navigation.css'
import '../styles/AboutMeSection.css'
import '../styles/Footer.css'
import {Link} from 'react-router-dom';

export default function CenteredTabs() {
    return (
        <div className="nav-bar w-full flex items-center justify-center py-5 ">
            <ul className="menu flex items-center justify-center  w-1/2">
                <li className="flex mx-8"><Link to="/CV-page/">About</Link></li>
                <li className="flex mx-8"><Link to="/CV-page/cv">CV</Link></li>
                <li className="flex mx-8"><Link to="/CV-page/pricing">Pricing</Link></li>
            </ul>
        </div>
    );
}