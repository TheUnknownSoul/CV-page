import '../styles/Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
    return (
        <div className="footer justify-stretch  py-36">
            <div>
                <h1>CONTACTS AND ADDITIONAL INFO</h1>
            </div>
            <div className="w-full flex  justify-center ">


                <div className="contact flex justify-center w-1/2 items-center py-16 ">
                    <div className="flex-row mx-2.5 items-center  ">
                        <LinkedInIcon></LinkedInIcon>
                        <a href="https://linkedin.com/andrii-roi"> LinkedIn</a>
                    </div>

                    <div className="flex-row mx-2.5 items-center  ">
                        <GitHubIcon></GitHubIcon>
                        <a href="https://github.com/TheUnknownSoul"> Github</a>
                    </div>

                    <div className="flex-row mx-2.5 items-center  ">
                        <MailOutlineIcon></MailOutlineIcon>
                        <a href="mailto:andriyroy3@gmail.com">Email</a>
                    </div>

                    <div className="flex-row mx-2.5 items-center  ">
                        <TwitterIcon></TwitterIcon>
                        <a href="https://x.com/v01d1nc4rn4t3">Twitter</a>
                    </div>
                </div>

            </div>

        </div>
    )
}