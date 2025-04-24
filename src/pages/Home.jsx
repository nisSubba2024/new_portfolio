import ProfilePicture from '../assets/IMG_2909.jpg'

export function IconWrap({icon}) {
    return (
        <span className={"icon-wrapper"}>{icon}</span>
    )
}

export function SocialIcon({icon}) {
    return (
        <a className={"link"} href={"#"}>{icon}</a>
    )
}

export function Socials() {

    const socialIcon = {
        github: <i className="fa-brands fa-github social-icon"></i>,
        linkedin: <i className="fa-brands fa-linkedin social-icon"></i>,
    }
    return(
        <>
            <div className={"btn-group"}>
                <a href={"#"} className={"link btn"}>Download CV</a>
                <a href={"#"} className={"link btn"}>Contact</a>
            </div>
            <div className={"social-icon-group"}>
                <SocialIcon icon={socialIcon.github} />
                <SocialIcon icon={socialIcon.linkedin} />
            </div>
        </>
    )
}

export default function Home() {

    const wrapperIcon = {
        analytics: <i className="fa-solid fa-chart-simple"></i>,
        database: <i className="fa-solid fa-database"></i>,
        code: <i className="fa-solid fa-code"></i>
    }
    //
    // const socialIcon = {
    //     github: <i className="fa-brands fa-github social-icon"></i>,
    //     linkedin: <i className="fa-brands fa-linkedin social-icon"></i>,
    // }

    return (
        <section id={"home"} className={"section"}>
            <div className={"section-wrapper home-wrapper"}>
                <div className={"right-side"}>
                    <h3 className={"intro-msg"}>Hi,</h3>
                    <h1 className={"name"}>I'm Nishan.</h1>
                    <div className={"hero-description"}>
                        <p className={"hero-subtext"}>I'm an aspiring <span className={"role-design"}>data analyst</span>, <span className={"role-design"}>web developer</span>, and <span className={"role-design"}>database developer</span>, learning every day and looking for chances to level up and gain real experience.</p>
                        <p className={"hero-subtext"}>Thanks for visiting — welcome to my portfolio.</p>

                        {/*<h3 className={"work-title"}><IconWrap icon={wrapperIcon.analytics}/>Data Analyst<IconWrap*/}
                        {/*    icon={wrapperIcon.analytics}/></h3>*/}
                        {/*<h3 className={"work-title"}><IconWrap icon={wrapperIcon.code}/>Frontend Developer<IconWrap*/}
                        {/*    icon={wrapperIcon.code}/></h3>*/}
                        {/*<h3 className={"work-title"}><IconWrap icon={wrapperIcon.database}/>Database Developer<IconWrap*/}
                        {/*    icon={wrapperIcon.database}/></h3>*/}
                    </div>
                    <Socials />
                    {/*<div className={"btn-group"}>*/}
                    {/*    <a href={"#"} className={"link btn"}>Download CV</a>*/}
                    {/*    <a href={"#"} className={"link btn"}>Contact</a>*/}
                    {/*</div>*/}
                    {/*<div className={"social-icon-group"}>*/}
                    {/*    <SocialIcon icon={socialIcon.github} />*/}
                    {/*    <SocialIcon icon={socialIcon.linkedin} />*/}
                    {/*</div>*/}
                </div>
                {/*<div className={"left-side"}>*/}
                {/*    <img className={"profile-pic"} src={ProfilePicture} alt={""}/>*/}
                {/*</div>*/}
            </div>
        </section>
    )

}