import UnscrambledImg from '../assets/unscramble_me.png';
import ParkingPaymentDB from '../assets/project_ss/er-diagram.png';


function ProjectGroup({groupName, projectDetails}) {
    return (
        <>
            <div className={"project-divider"}>
                <div className={"project-group-title"}>{groupName}</div>
                <div className={"project-group js-projects"}>
                    <CreateCard projectDetails={projectDetails}/>
                </div>
            </div>
        </>
    )
}

function CreateCard({projectDetails}) {
    return (
        <>

            {Object.keys(projectDetails).map((key, index) => (
                    <div key={index} className={"project-card"}>
                        <img className={"project-img"} src={projectDetails[key].imgSrc} alt={projectDetails[key].imgAlt}/>
                        <h3 className={"project-title"}>{projectDetails[key].name}</h3>
                        {projectDetails[key].techStacks && (
                            <div className={"project-tech-group"}>
                                {Object.keys(projectDetails[key].techStacks).map((tech, index) => (
                                    <p key={index}
                                       className={"tech-stack-wrapper"}>{projectDetails[key].techStacks[tech]}</p>
                                ))}

                            </div>

                        )}
                        <p className={"project-description"}>{projectDetails[key].description}
                        </p>
                        <div className={"project-btn-group"}>
                            {
                                Object.entries(projectDetails[key].button).map(([btn, link], index) => (
                                    <a target={"_blank"} href={link} key={index} className={"link btn"}>{btn}</a>
                                ))
                            }
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
                techStacks: ['SQL', 'PL/SQL', 'Oracle 10g'],
                description: 'This is a testing project and will be deleted promptly.',
                button: {
                    'Live Demo': '#',
                    'GitHub Repo': '#'
                }
            },
            unscrambled2: {
                imgSrc: UnscrambledImg,
                imgAlt: "Unscrambled Me",
                name: 'Unscrambled Me2',
                description: 'This is a testing project and will be deleted promptly.',
                button: {
                    'Live Demo': '#',
                    'GitHub Repo': '#'
                }
                // button: ['GitHub Repo']
            },
            unscrambled3: {
                imgSrc: UnscrambledImg,
                imgAlt: "Unscrambled Me",
                name: 'Unscrambled Me3',
                description: 'This is a testing project and will be deleted promptly.',
                button: {
                    'Live Demo': '#',
                    'GitHub Repo': '#'
                }
                // button: ['Live Demo', 'GitHub Repo']
            }
        },
        databaseDevelopment: {
            parkingPayment: {
                imgSrc: ParkingPaymentDB,
                imgAlt: "Er diagram of Parking Payment System",
                name: 'Parking Payment DB Management',
                techStacks: ['SQL', 'PL/SQL', 'Oracle 10g'],
                description: 'UMBC Capstone project. This Parking Payment Management System allows users to register' +
                    ' vehicles,' +
                    ' find available parking zones, manage sessions, receive expiration alerts, and view detailed session reports including duration and cost.',
                button: {
                    'GitHub Repo': 'https://github.com/nisSubba2024/payment_management_system'
                }
                // button: ['Source Code']
            }
        }
    }


    return (
        <section id={"projects"}>
            <h1 className={"section-title"}>Project.</h1>
            <div className={"section-wrapper"}>
                <div className={"projects-group"}>
                    <ProjectGroup groupName={'JavaScript Project'} projectDetails={projectDetails.webDev}/>
                    <ProjectGroup groupName={'C++ Project'} projectDetails={projectDetails.webDev}/>
                    <ProjectGroup groupName={'Database Management'}
                                  projectDetails={projectDetails.databaseDevelopment}/>
                </div>
            </div>

        </section>
    )
}