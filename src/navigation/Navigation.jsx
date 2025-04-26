import {useState, useEffect} from 'react';

export function NavBar({menuChange, onLinkClick}) {
    return (
        <>
            <ul className={`nav-list ${menuChange ? 'active' : ''}`}>
                <li className={"list nav-item"}>
                    <a onClick={onLinkClick} className={" link nav-link"} href={'#home'}>Home</a>
                </li>
                <li className={"list nav-item"}>
                    <a onClick={onLinkClick} className={" link nav-link"} href={'#about'}>About</a>
                </li>
                <li className={"list nav-item"}>
                    <a onClick={onLinkClick} className={" link nav-link"} href={'#skills'}>Skills</a>
                </li>
                <li className={"list nav-item"}>
                    <a onClick={onLinkClick} className={" link nav-link"} href={'#projects'}>Projects</a>
                </li>
                <li className={"list nav-item"}>
                    <a onClick={onLinkClick} className={"link nav-link"} href={'#contact'}>Contact</a>
                </li>
            </ul>
        </>
    )
}

export default function Navigation() {
    const [menuActive, setMenuActive] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    function toggleMenuIcon() {
        setMenuActive((prevState) => !prevState);
    }

    function closeNavBar() {
        setMenuActive(false);
    }

    function toggleDarkMode() {
        setDarkMode((prevMode) => !prevMode);
    }

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode])

    return (
        <>
            <header className={"nav-header"}>
                <div className="logo">
                    <a href={"#home"} className={"link logo-active"}>Nishan Subba</a>
                    <a href={"#home"} className={"link logo-hidden"}>NS</a>

                </div>
                <nav className={`nav-menu`}>
                    <NavBar menuChange={menuActive} onLinkClick={closeNavBar}/>
                    <i onClick={toggleDarkMode} className="fa-solid fa-circle-half-stroke mode-switcher"></i>
                    <i onClick={toggleMenuIcon} id="menu-icon" className="fa-solid fa-bars"></i>
                    <div className="visit-github">
                        <a href={"https://github.com/nisSubba2024"} target={"_blank"} className={"link btn github-btn"}>Visit
                            Github
                        </a>
                    </div>
                </nav>
            </header>
        </>
    )
}