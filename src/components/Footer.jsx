import facebook from "../assets/Facebook Icon.svg"
import twitter from "../assets/Twitter Icon.svg"
import github from "../assets/Github Icon.svg"
import instagram from "../assets/Instagram Icon.png"

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