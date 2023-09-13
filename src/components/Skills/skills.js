import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'
import './skills.css';
const Skills = () => {

    return (
        <section id='skills'>
            <span className="skillTitle"> What I do</span>
            <span className="skillDesc">I am a skilled web designer with experience in creating visually appealing and user friendly websites. I am proficient in HTML, CSS, JAVA SCRIPT and REACT.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>This is a demo text . . . . .</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={WebDesign} className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>This is a demo text . . . . .</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={AppDesign} className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>This is a demo text . . . . .</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills;