import {Socials} from './Home.jsx';

export default function About() {
    return (
        <section id={"about"}>
            <h1 className={"section-title"}>About.</h1>
            <div className={"section-wrapper about-wrapper"}>
                <div className={"left-side"}>
                    <h3 className={"about-header"}>Hey there! Welcome to My Portfolio!</h3>
                    <p className={"about-context"}>I'm Nishan Subba - a web developer, database developer, and analyst
                        who loves building cool stuff. I have a Bachelor’s in Information Systems and I love turning
                        ideas into functional, user-friendly projects.</p>
                    <p className={"about-context"}>Feel free to check out my projects, try the demos, and if you like
                        what you see, dive into the code on my GitHub.</p>
                    <p className={"about-context"}>I’m currently looking for opportunities where I can put my skills to
                        good use and learn along the way. If something catches your interest, feel free to download my
                        resume below or say hi on LinkedIn.</p>
                    <Socials/>
                </div>
            </div>
        </section>
    )
}