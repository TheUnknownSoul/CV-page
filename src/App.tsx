import React, {useEffect, useState} from 'react';
import './App.css';
import './styles/Navigation.css'
import AboutMeSection from "./components/AboutMeSection";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CVSection from "./components/CVSection";
import PricingSection from "./components/PricingSection";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import {Container, Paper} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import CodeIcon from "@mui/icons-material/Code";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function App() {

    // const [value, setValue] = useState("1");
    // const [effect, setEffect] = useState(false);
    // useEffect(() => {
    //     console.log("effect")
    //     let element = document.getElementsByClassName("nav-bar").item(0);
    //
    //     if (element) {
    //         element.addEventListener("click", () => setEffect(true));
    //         console.log(element)
    //     }
    //
    // });
    //
    // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    //     setValue(newValue);
    // };
    // const handleActiveTabChange = (event: React.SyntheticEvent, newValue: string) => {
    //     console.log("handleActiveTabChange", newValue);
    // }
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

            {/*<Paper className="nav-bar" elevation={2}  variant="elevation">*/}
                {/*<Container>*/}

                {/*    <TabContext value={value}>*/}
                {/*        <Tabs textColor="inherit" value={value} onChange={handleChange} centered>*/}

                {/*            <Tab label="About me" icon={<PersonPinIcon/>} href="/" value="1"/>*/}
                {/*            <Tab label="CV" icon={<CodeIcon/>} href="/cv" value="2"/>*/}
                {/*            <Tab label="Pricing" icon={<AttachMoneyIcon/>} href="/pricing" value="3"/>*/}

                {/*        </Tabs>*/}
                {/*    </TabContext>*/}
                {/*</Container>*/}
            {/*</Paper>*/}

            {/*<Navigation/>*/}
            {/*<AboutMeSection/>*/}
            <Footer/>

        </div>
    )
        ;
}
