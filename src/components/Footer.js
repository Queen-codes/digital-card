import Facebook from "../assets/icon-instagram.svg";
import Twitter from "../assets/icon-twitter.svg";
import Pinterest from "../assets/icon-pinterest.svg";

function Footer () {
    return (
        <footer>
            <ul>
                <li><img src={Facebook} alt="Facebook-logo" /></li>
                <li>
                    <img src={Twitter} alt="Twitter-logo" />
                </li>
                <li>
                    <img src={Pinterest} alt="pinterest-logo" />
                </li>
            </ul>
        </footer>
    )
}

export default Footer;