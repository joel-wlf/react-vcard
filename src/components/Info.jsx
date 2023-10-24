import picture from "../assets/profile-picture.jpg"
import linkedin from "../assets/linkedin.svg"
import mail from "../assets/mail.svg"

function Info() {
    return (
        <div className="info--container">
            <img src={picture} className="info--picture" />
            <div className="info--text">
                <h1 className="info--name">Joel Wolf</h1>
                <p className="info--title">Frontend Developer</p>
                <a href="joel-wolf.com" className="info--website">joel-wolf.com</a>
                <div className="info--action-buttons">
                    <button><img src={mail} className="info--button-icon" />Email</button>
                    <button><img src={linkedin} className="info--button-icon" />LinkedIn</button>
                </div>
            </div>
        </div>
    )
}

export default Info