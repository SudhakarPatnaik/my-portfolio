import bg from "../../assets/dark.png";
import hireme from "../../assets/hireme.png";
import { Link } from "react-scroll";
import './Intro.css';
const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm<span className="introName"> Sudhakar</span><br />Frontend Engineer</span>
                <p className="introPara">I am a skilled web designer with experience in creating visually appealing and user friendly websites.</p>
                <Link> <button className="btn"><img src={hireme} className="btnImg" />Hire Me</button></Link>
            </div>
            <img src={bg} className="bg" />
        </section>
    )
}

export default Intro;