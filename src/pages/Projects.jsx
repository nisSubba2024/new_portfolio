import UnscrambledImg from '../assets/unscramble_me.png';

function CreateCard({groupName, projectDetails}) {
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
                button: ['Live Demo', 'GitHub Repo']
            },
            unscrambled2: {
                imgSrc: UnscrambledImg,
                imgAlt: "Unscrambled Me",
                name: 'Unscrambled Me2',
                description: 'This is a testing project and will be deleted promptly.',
                button: ['Live Demo', 'GitHub Repo']
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
                    <div className={"project-divider"}>
                        <div className={"project-group-title"}>JavaScript Project</div>
                        <div className={"project-group js-projects"}>
                            <div className={"project-card"}>
                                <img className={"project-img"} src={UnscrambledImg} alt="unscrambled picture"/>
                                <h3 className={"project-title"}>Unscrambled Me</h3>
                                <p className={"project-description"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, blanditiis consequuntur corporis doloribus enim esse fuga illo, impedit iure minima nam nihil porro quo repellat sint tenetur totam, unde vero?10
                                </p>
                                <div className={"project-btn-group"}>
                                    <a href={"#"} className={"link btn"}>Live Demo</a>
                                    <a href={"#"} className={"link btn"}>GitHub Repo</a>
                                </div>
                            </div>

                            <div className={"project-card"}>
                                <img className={"project-img"} src={UnscrambledImg} alt="unscrambled picture"/>
                                <h3 className={"project-title"}>Unscrambled Me</h3>
                                <p className={"project-description"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, blanditiis consequuntur corporis doloribus enim esse fuga illo, impedit iure minima nam nihil porro quo repellat sint tenetur totam, unde vero?10
                                </p>
                                <div className={"project-btn-group"}>
                                    <a href={"#"} className={"link btn"}>Live Demo</a>
                                    <a href={"#"} className={"link btn"}>GitHub Repo</a>
                                </div>
                            </div>

                            <div className={"project-card"}>
                                <img className={"project-img"} src={UnscrambledImg} alt="unscrambled picture"/>
                                <h3 className={"project-title"}>Unscrambled Me</h3>
                                <p className={"project-description"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, blanditiis consequuntur corporis doloribus enim esse fuga illo, impedit iure minima nam nihil porro quo repellat sint tenetur totam, unde vero?10
                                </p>
                                <div className={"project-btn-group"}>
                                    <a href={"#"} className={"link btn"}>Live Demo</a>
                                    <a href={"#"} className={"link btn"}>GitHub Repo</a>
                                </div>
                            </div>

                            <CreateCard groupName={''} projectDetails={projectDetails.webDev} />
                        </div>
                    </div>

                </div>
            </div>

    </section>
    )
}