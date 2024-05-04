import '../styles/Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
    return (
        <div className="footer justify-stretch  ">
            <div>
                {/*<h1>Contacts and additional info</h1>*/}
                <h1>CONTACTS AND ADDITIONAL INFO</h1>
            </div>
            <div className="contact flex justify-around">
                <span><LinkedInIcon></LinkedInIcon>
                    <a href="https://linkedin.com/andrii-roi"> LinkedIn</a>
                </span>
                <span><GitHubIcon></GitHubIcon>
                    <a href="https://github.com/TheUnknownSoul"> Github</a>
                </span>
                <span><MailOutlineIcon></MailOutlineIcon>
                    <a href="mailto:andriyroy3@gmail.com">Email</a>
                </span>
                <span><TwitterIcon></TwitterIcon>
                    <a href="https://x.com/v01d1nc4rn4t3">Twitter</a>
                </span>
            </div>
        </div>
    )
}