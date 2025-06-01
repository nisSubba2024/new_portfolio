import PowerPointIcon from '../assets/icons/powerpoint.png';
import ExcelIcon from '../assets/icons/excel.png';

function DisplaySkill({skills}) {
    return (
        <>
            {Object.keys(skills).map((skill, index) => (
                    <div key={index} className={"skill-wrapper"}>
                        <div className={"skill-icon"}>
                            {skills[skill]}
                        </div>
                        <div className={"skill-name"}>{skill.toUpperCase()}</div>
                    </div>
                )
            )}
        </>

    )
}

export default function Skills() {

    const skillSet = {
        languages: {
            python: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                         alt={"python-icon"}/>,
            javascript: <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                alt={"javascript-icon"}/>,
            "c++": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                        alt={"c++-icon"}/>,
            java: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt={"java-icon"}/>
            ,
            sql: <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
                alt={"sql-icon"}/>
        },
        fronted: {
            html: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                       alt={"html-icon"}/>,
            css: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                      alt={"css-icon"}/>,
            javascript: <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                alt={"javascript-icon"}/>,
            // react: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt={"react-icon"}/>,
            bootstrap: <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                alt={"bootstrap-icon"}/>,
            springBoot:
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" alt={"spring-icon"}/>,
            tailwindcss:
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt={"tailwindcss-icon"}/>,
            expressjs:
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" alt={"express-icon"}/>



        },
        database: {
            postgres: <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                alt={"postgres-icon"}/>,
            oracle: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg"
                         alt={"oracle-icon"}/>,
            mysql: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                        alt={"mysql-icon"}/>,
            sql: <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
                alt={"sql-icon"}/>,
            python: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                         alt={"python-icon"}/>,
            powerpoint: <img src={PowerPointIcon} alt={"powerpoint"}/>,
            excel: <img src={ExcelIcon} alt={"powerpoint"}/>

        },

        tools: {
            webstorm:
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webstorm/webstorm-original.svg"
                     alt={"webstorm-icon"}/>,
            pycharm: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg"
                          alt={"pycharm-icon"}/>,
            intellij: <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg"
                alt={"intellij-icon"}/>,
            datagrip:
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/datagrip/datagrip-original.svg"
                     alt={"datagrip-icon"}/>,
            vscode: <i className="devicon-vscode-plain colored"></i>,
            github: <i className="devicon-github-original"></i>,

        }
    }
    return (<section id={"skills"}>
            <h1 className={"section-title"}>Skills.</h1>
            <div className={"section-wrapper"}>
                <div className={"skill-group"}>
                    <div className={"skill-set-group"}>
                        <div className={"skill-group-title"}>Programming Language</div>
                        <div className={"skill-set"}>
                            <DisplaySkill skills={skillSet.languages}/>
                        </div>
                    </div>
                    <div className={"skill-set-group"}>
                        <div className={"skill-group-title"}>Web Development</div>
                        <div className={"skill-set"}>
                            <DisplaySkill skills={skillSet.fronted}/>
                        </div>
                    </div>
                    <div className={"skill-set-group"}>
                        <div className={"skill-group-title"}>Database and Analytics</div>
                        <div className={"skill-set"}>
                            <DisplaySkill skills={skillSet.database}/>
                        </div>
                    </div>
                    <div className={"skill-set-group"}>
                        <div className={"skill-group-title"}>Tools and IDE</div>
                        <div className={"skill-set"}>
                            <DisplaySkill skills={skillSet.tools}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}