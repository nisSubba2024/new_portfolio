import {SocialIcon} from './Home.jsx'

export default function Contact() {
    const socialIcon = {
        github: <i className="fa-brands fa-github social-icon"></i>,
        linkedin: <i className="fa-brands fa-linkedin social-icon"></i>,
    }
    return (
        <section id={"contact"}>
            <h1 className={"section-title"}>Let's Connect.</h1>
            <div className={"section-wrapper"}>
                <div className={"contact-group"}>
                    <div className={"social-icon-group"}>
                        <SocialIcon icon={socialIcon.linkedin} link={"https://www.linkedin.com/in/nishan-subba-0813a32a8/"}/>
                        <SocialIcon icon={socialIcon.github} link={"https://github.com/nisSubba2024"}/>
                    </div>
                </div>
            </div>
        </section>
    )
}