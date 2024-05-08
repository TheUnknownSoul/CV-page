import photo from "../images/andrii.png"
import "../styles/AboutMeSection.css"
import {Paper} from "@mui/material";

export default function AboutMeSection() {
    return (

        <div className="main-section flex flex-col items-center justify-center">
            <div className="py-5">

                <h1>About me</h1>

                <img src={photo} alt="Andrey" className="avatar rounded-full py-7"/>
            </div>
            <Paper className="paper py-5" variant="elevation" square={false}>

                <div className="">
                    <p>
                        Hi,

                        my name is Andrii and I'm glad to see you on my CV page. Here you can find some information
                        about me,
                        my work experience, passions and history about my life.
                    </p>
                </div>
            </Paper>
        </div>

    )
}