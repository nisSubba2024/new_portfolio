import UnscrambledImg from '../assets/project_ss/unscramble_me.png';
import ParkingPaymentDB from '../assets/project_ss/er-diagram.png';
import FinanceTracker from '../assets/project_ss/financetracker.png';
import MDAidsAnalysis from '../assets/project_ss/maryland_aid_analysis_ss.png';
import TicTacToe from '../assets/project_ss/tictactoe.png';
import HorizonZeroDawn from '../assets/project_ss/horizon_zd_ss.png';
import WordSearch from '../assets/project_ss/word_search.png';
import WorldFlags from '../assets/project_ss/world_flags.png';
import Portfolio from '../assets/project_ss/portfolio_website.png';
import DictionaryImg from '../assets/project_ss/dictionary.png';
import DadJokeImg from '../assets/project_ss/dad_joke.png';
import RickAndMorty from '../assets/project_ss/rickandmorty.png';
import TaskManager from '../assets/project_ss/taskManager.png';
import Supermarket from '../assets/project_ss/supermarket.png';
import ImageEditor from '../assets/project_ss/image_editor.png';
import CarRentalImg from "../assets/project_ss/car_rental_backend_er_diagram.png";


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
                name: 'Word Unscrambler',
                techStacks: ['HTML', 'CSS', 'JavaScript'],
                description: 'The program sorts each word in the English dictionary and creates a key-value pair hashmap. When the user enters a word, it is sorted and matched against the keys in the hashmap.',
                button: {
                    'Live Demo': 'https://nissubba2024.github.io/word_unscrambler/',
                    'GitHub Repo': 'https://github.com/nisSubba2024/word_unscrambler'
                }
            },
            HorizonZeroDawn: {
                imgSrc: HorizonZeroDawn,
                imgAlt: "Horizon Zero Dawn Forbidden West",
                name: 'Game Landing Page',
                description: 'One of my favorite video games is Horizon Zero Dawn. When the sequel Forbidden West was released, I wanted to create a website to promote it. It is a simple game landing page that displays game details and provides links to purchase the game.',
                techStacks: ['HTML', 'CSS'],
                button: {
                    'Live Demo': 'https://nissubba2024.github.io/hzd_landing_page/',
                    'GitHub Repo': 'https://github.com/nisSubba2024/hzd_landing_page'
                },
            },
            Portfolio: {
                imgSrc: Portfolio,
                imgAlt: "Portfolio site",
                name: 'Portfolio',
                description: 'A sleek, ultra-responsive portfolio site with light/dark mode and full mobile support, built to showcase my projects and skills.',
                techStacks: ['HTML', 'CSS', 'JavaScript', 'React'],
                button: {
                    'Live Demo': 'www.nishansubba.com',
                    'GitHub Repo': 'https://github.com/nisSubba2024/new_portfolio'
                }
            },
            dictionary: {
                imgSrc: DictionaryImg,
                imgAlt: "Dictionary Img",
                name: 'English Dictionary API',
                description: 'A responsive web application that allows users to search for word definitions using' +
                    ' the Free Dictionary API. The app retrieves and displays meanings, part of speech, and audio' +
                    ' usages of words.',
                techStacks: ['HTML', 'CSS', 'JavaScript',],
                button: {
                    'Live Demo': 'https://nissubba2024.github.io/english_dictionary/',
                    'GitHub Repo': 'https://github.com/nisSubba2024/english_dictionary'
                }
            },
            dadJoke: {
                imgSrc: DadJokeImg,
                imgAlt: "Dad joke Img",
                name: 'Dad Joke Generator',
                description: 'A program that retrieve random dad joke from icanhazdadjoke API and displays it.',
                techStacks: ['HTML', 'CSS', 'JavaScript',],
                button: {
                    'Live Demo': 'https://nissubba2024.github.io/random_dad_joke_generator/',
                    'GitHub Repo': 'https://github.com/nisSubba2024/random_dad_joke_generator'
                }
            },
            rickAndMorty: {
                imgSrc: RickAndMorty,
                imgAlt: "Rick and Morty Img",
                name: 'Rick and Morty DB',
                description: 'A program that retrieve all the characters and details from Rick and Morty show. It' +
                    ' list their origin, status, appearance',
                techStacks: ['HTML', 'CSS', 'JavaScript',],
                button: {
                    'Live Demo': 'https://nissubba2024.github.io/rick_and_morty_db/',
                    'GitHub Repo': 'https://github.com/nisSubba2024/rick_and_morty_db'
                }
            },
            taskManager: {
                imgSrc: TaskManager,
                imgAlt: "Task Manager Img",
                name: 'Task Manager',
                description: 'Built a Task Manager web app using TypeScript with a focus on Object-Oriented Programming (OOP) principles. Implemented interfaces and classes to manage task creation, display, completion, and deletion. The app dynamically updates the DOM, providing a responsive and interactive user experience.',
                techStacks: ['HTML', 'CSS', 'Typescript', 'OOP'],
                button: {
                    'Live Demo': 'https://nissubba2024.github.io/task_manager/',
                    'GitHub Repo': 'https://github.com/nisSubba2024/task_managerb'
                }
            },
            imageEditor: {
                imgSrc: ImageEditor,
                imgAlt: "Image Editor Img",
                name: 'Image Editor',
                description: 'This is a web-based image editor built with TypeScript that allows users to apply real-time filters, rotate, and flip images. Users can upload an image, adjust visual effects like brightness or contrast, and download the edited image using a canvas-based rendering system.',
                techStacks: ['HTML', 'CSS', 'Typescript',],
                button: {
                    'Live Demo': 'https://nissubba2024.github.io/image-editor/',
                    'GitHub Repo': 'https://github.com/nisSubba2024/image-editor'
                }
            },
        },
        Java: {
            SupermarketSimulation: {
                imgSrc: Supermarket,
                imgAlt: "Supermarket Simulation img",
                name: 'Supermarket Simulation',
                techStacks: ['Java', 'LinkedList'],
                description: 'This Java-based console application simulates a basic supermarket system. It allows' +
                    ' for customer creation, inventory management (add, remove, update), and simulates checkout' +
                    ' using a LinkedList to handle customer queues. The system processes checkouts, updates' +
                    ' inventory, and keeps track of the current number of customers. It also uses core OOP concepts' +
                    ' and basic data structure usage in a real-world scenario.',
                button: {
                    'GitHub Repo': 'https://github.com/nisSubba2024/supermarket_simulation'
                }
            },

            carRentalBackend: {
                imgSrc: CarRentalImg,
                imgAlt: "Car rental img",
                name: 'Car Rental Backend',
                techStacks: ['Java', 'Spring Boot', "Maven", "RESTful API", "PostgreSQL"],
                description: 'Built a full backend system for a car rental service using Java 24, Spring Boot 3.4.5, and PostgreSQL 17. It’s a RESTful API that handles all CRUD operations for users, vehicles, orders, and payments with secure authentication and role-based access. The project uses clean architecture and OOP principles to keep the code modular and easy to maintain. It connects to the database and reflects real-world use cases of car rental businesses, covering everything from vehicle availability to order management and payment processing.',
                button: {
                    'GitHub Repo': 'https://github.com/nisSubba2024/car_rental_backend'
                }
            },
        },
        'c++': {
            wordSearch: {
                imgSrc: WordSearch,
                imgAlt: "Word search game",
                name: 'Word Search',
                description: 'A console-based implementation of the classic word search game. The program loads data from a file and uses (x, y) coordinates to perform searches.',
                techStacks: ['C++','Doxygen'],
                button: {
                    'GitHub Repo': 'https://github.com/nisSubba2024/word_search',
                    'Read Doc': 'https://nissubba2024.github.io/word_search/files.html'
                }
            },
            ticTacToe: {
                imgSrc: TicTacToe,
                imgAlt: "Tic Tac Toe",
                name: 'Tic Tac Toe',
                description: 'A console-based implementation of the classic tic-tac-toe game. The program uses a 2D grid system, and each player takes turns making moves using (x, y) coordinates.',
                techStacks: ['C++','Doxygen'],
                button: {
                    'GitHub Repo': 'https://github.com/nisSubba2024/tic_tac_toe',
                    'Read Doc': 'https://nissubba2024.github.io/tic_tac_toe/tic_tac_toe_8cpp.html'
                }
            }
        },
        python: {
            financeTracker: {
                imgSrc: FinanceTracker,
                imgAlt: "Finance Tracker",
                name: 'Finance Tracker',
                description: 'A console-based finance tracker built with Python. The program uses a file system to load and store data. Features include adding, modifying, and deleting transactions, viewing logs, generating reports, and visualizing financial data.',
                techStacks: ['Python', 'Doxygen'],
                button: {
                    'GitHub Repo': 'https://github.com/nisSubba2024/personal_finance_tracker',
                    'Read Doc': 'https://nissubba2024.github.io/personal_finance_tracker/annotated.html'
                }
            },
            worldFlags: {
                imgSrc: WorldFlags,
                imgAlt: "World Flags",
                name: 'World Flags',
                description: 'A web scraper built using Python\'s BeautifulSoup library. The program scrapes flags and country names, then saves the data to a JSON file.',
                techStacks: ['Python', 'Doxygen'],
                button: {
                    'GitHub Repo': 'https://github.com/nisSubba2024/web_scrapper_world_flags/tree/main',
                }
            }
        },
        DataAnalysis: {
            parkingPayment: {
                imgSrc: ParkingPaymentDB,
                imgAlt: "Er diagram of Parking Payment System",
                name: 'Parking Payment DB Management',
                techStacks: ['SQL', 'PL/SQL', 'Oracle 11g'],
                description: 'UMBC Capstone project. This Parking Payment Management System allows users to register' +
                    ' vehicles,' +
                    ' find available parking zones, manage sessions, receive expiration alerts, and view detailed session reports including duration and cost.',
                button: {
                    'GitHub Repo': 'https://github.com/nisSubba2024/payment_management_system'
                }
            },
            mdAnalysis: {
                imgSrc: MDAidsAnalysis,
                imgAlt: "MD Analysis dashboard",
                name: 'Maryland Aid Analysis',
                techStacks: ['SQL', 'PostgreSQL', 'Excel'],
                description: 'An exploratory analysis of Maryland aid distribution from 2009 to 2023. The project examines trends over time, budget allocations, and the impact of the COVID-19 pandemic.',
                button: {
                    'GitHub Repo': 'https://github.com/nisSubba2024/maryland_aid_data_analysis'
                }
            }
        }
    }


    return (
        <section id={"projects"}>
            <h1 className={"section-title"}>Projects.</h1>
            <div className={"section-wrapper"}>
                <div className={"projects-group"}>
                    <ProjectGroup groupName={'HTML CSS JavaScrip Projects'} projectDetails={projectDetails.webDev}/>
                    <ProjectGroup groupName={'Java Projects'} projectDetails={projectDetails.Java}/>
                    <ProjectGroup groupName={'SQL Analysis Projects'}
                                  projectDetails={projectDetails.DataAnalysis}/>
                    <ProjectGroup groupName={'Python Projects'} projectDetails={projectDetails.python}/>
                    <ProjectGroup groupName={'C++ Projects'} projectDetails={projectDetails["c++"]}/>

                </div>
            </div>

        </section>
    )
}