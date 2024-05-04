import photo from "../images/venom_img.png"
import "../styles/AboutMeSection.css"
import {Paper} from "@mui/material";

export default function AboutMeSection() {
    return (

        <div className="main-section">
            <div >

                <h1>About me</h1>

                <img src={photo} alt="Andrey" className="avatar rounded-full"/>
            </div>
            <Paper className="paper " variant="elevation" square={false}>

                <div className="">
                    <p>
                        Hi,

                        my name is Andrii and I'm glad to see you on my CV page. Here you can find some information about me,
                        my work experience, passions and history about my life.
                    </p>
                </div>
            </Paper>
        </div>

    )
}