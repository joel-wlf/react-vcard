import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import github from "../assets/github.svg"
import instagram from "../assets/instagram.png"

function Footer() {
    return (
        <div className="footer--container">
            <img src={facebook} className="footer--icon" />
            <img src={instagram} className="footer--icon" />
            <img src={twitter} className="footer--icon" />
            <img src={github} className="footer--icon" />
        </div>
    )
}

export default Footer