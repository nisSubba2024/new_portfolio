import UnscrambledImg from '../assets/unscramble_me.png';

function ProjectGroup({groupName, projectDetails}) {
    return(
        <>
            <div className={"project-divider"}>
                <div className={"project-group-title"}>{groupName}</div>
                <div className={"project-group js-projects"}>
                <CreateCard projectDetails={projectDetails} />
                </div>
            </div>
        </>
    )
}

function CreateCard({projectDetails}) {
    return(
        <>

            {Object.keys(projectDetails).map((key, index) => (
                <div key={index} className={"project-card"}>
                    <img className={"project-img"} src={projectDetails[key].imgSrc} alt={projectDetails[key].imgAlt}/>
                    <h3 className={"project-title"}>{projectDetails[key].name}</h3>
                    <p className={"project-description"}>{projectDetails[key].description}
                    </p>
                    <div className={"project-btn-group"}>
                        {
                            Object.keys(projectDetails[key].button).map((btn, index) => (
                                <a href={"#"} key={index} className={"link btn"}>{projectDetails[key].button[btn]}</a>
                            ))
                        }
                        {/*<a href={"#"} className={"link btn"}>Live Demo</a>*/}
                        {/*<a href={"#"} className={"link btn"}>GitHub Repo</a>*/}
                    </div>
                </div>
                )

            )}

        </>
    )
}

export default function Projects() {

    const projectDetails = {
        webDev: {
            unscrambled: {
                imgSrc: UnscrambledImg,
                imgAlt: "Unscrambled Me",
                name: 'Unscrambled Me1',
                description: 'This is a testing project and will be deleted promptly.',
                button: ['Live Demo', 'Source Code']
            },
            unscrambled2: {
                imgSrc: UnscrambledImg,
                imgAlt: "Unscrambled Me",
                name: 'Unscrambled Me2',
                description: 'This is a testing project and will be deleted promptly.',
                button: ['GitHub Repo']
            },
            unscrambled3: {
                imgSrc: UnscrambledImg,
                imgAlt: "Unscrambled Me",
                name: 'Unscrambled Me3',
                description: 'This is a testing project and will be deleted promptly.',
                button: ['Live Demo', 'GitHub Repo']
            }
        }
    }


    return(
        <section id={"projects"}>
            <h1 className={"section-title"}>Project.</h1>
            <div className={"section-wrapper"}>
                <div className={"projects-group"}>
                    <ProjectGroup groupName={'JavaScript Project'} projectDetails={projectDetails.webDev} />
                    <ProjectGroup groupName={'C++ Project'} projectDetails={projectDetails.webDev} />
                    {/*<div className={"project-divider"}>*/}
                    {/*    <div className={"project-group-title"}>JavaScript Project</div>*/}
                    {/*    <div className={"project-group js-projects"}>*/}
                    {/*        <CreateCard groupName={''} projectDetails={projectDetails.webDev} />*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                </div>
            </div>

    </section>
    )
}