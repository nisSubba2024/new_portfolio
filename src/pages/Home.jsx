import Resume from '../assets/cv/NishanSubbaResume.pdf'

export function SocialIcon({icon, link}) {
    return (
        <a className={"link"} href={link} target={"_blank"}>{icon}</a>
    )
}

export function Socials() {

    const socialIcon = {
        github: <i className="fa-brands fa-github social-icon"></i>,
        linkedin: <i className="fa-brands fa-linkedin social-icon"></i>,
    }
    return (
        <>
            <div className={"btn-group"}>
                <a href={Resume} className={"link btn"} download>Download CV</a>
                <a href={"https://www.linkedin.com/in/nishan-subba-0813a32a8/"} target={"_blank"} className={"link btn"}>Contact</a>
            </div>
            <div className={"social-icon-group"}>
                <SocialIcon icon={socialIcon.github} link={"https://github.com/nisSubba2024"}/>
                <SocialIcon icon={socialIcon.linkedin} link={"https://www.linkedin.com/in/nishan-subba-0813a32a8/"}/>
            </div>
        </>
    )
}

export default function Home() {
    return (
        <section id={"home"} className={"section"}>
            <div className={"section-wrapper home-wrapper"}>
                <div className={"right-side"}>
                    <h3 className={"intro-msg"}>Hi,</h3>
                    <h1 className={"name"}>I'm Nishan.</h1>
                    <div className={"hero-description"}>
                        <p className={"hero-subtext"}>I'm an aspiring <span
                            className={"role-design"}>data analyst</span>, <span
                            className={"role-design"}>web developer</span>, and <span className={"role-design"}>database developer</span>,
                            learning every day and looking for chances to level up and gain real experience.</p>
                        <p className={"hero-subtext"}>Thanks for visiting — welcome to my portfolio.</p>
                    </div>
                    <Socials/>
                </div>
            </div>
        </section>
    )

}