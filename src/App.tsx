import React from 'react';
import './App.css';
import './styles/Navigation.css'
import AboutMeSection from "./components/AboutMeSection";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CVSection from "./components/CVSection";
import PricingSection from "./components/PricingSection";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";


export default function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Navigation/>
                <Routes>
                    <Route index path="/" element={<AboutMeSection/>}/>
                    <Route path="/cv" element={<CVSection/>}/>
                    <Route path="/pricing" element={<PricingSection/>}/>
                </Routes>
            </BrowserRouter>

            <Footer/>

        </div>
    );
}
