import {useState} from 'react';

export function NavBar({menuChange, onLinkClick}) {
    return(
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
    function toggleMenuIcon() {
        setMenuActive((prevState) => !prevState);
    }

    function closeNavBar() {
        setMenuActive(false);
    }

    return (
        <>
            <header className={"nav-header"}>
                <div className="logo">
                    <a href={"#home"} className={"link logo-active"}>Nishan Subba</a>
                    <a href={"#home"} className={"link logo-hidden"}>NS</a>
                </div>
                <nav className={`nav-menu`}>
                    <NavBar menuChange={menuActive} onLinkClick={closeNavBar}/>
                    <i onClick={toggleMenuIcon} id="menu-icon" className="fa-solid fa-bars"></i>
                    <div className="visit-github">
                        <a href={"#"} className={"link btn github-btn"}>Visit Github
                        </a>
                    </div>
                </nav>
            </header>
        </>
    )
}