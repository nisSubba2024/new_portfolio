import {useState} from 'react';

export function NavBar({menuChange}) {
    return(
        <>
            <ul className={`nav-list ${menuChange ? 'active' : ''}\``}>
                <li className={"list nav-item"}>
                    <a className={" link nav-link"} href={'#home'}>Home</a>
                </li>
                <li className={"list nav-item"}>
                    <a className={" link nav-link"} href={'#about'}>About</a>
                </li>
                <li className={"list nav-item"}>
                    <a className={" link nav-link"} href={'#skills'}>Skills</a>
                </li>
                <li className={"list nav-item"}>
                    <a className={" link nav-link"} href={'#projects'}>Projects</a>
                </li>
                <li className={"list nav-item"}>
                    <a className={"link nav-link"} href={'#contact'}>Contact</a>
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

    return (
        <>
            <header className={"nav-header"}>
                <div className="logo">
                    <a href={"#home"} className={"link"}>Nishan Subba</a>
                </div>
                <nav className={`nav-menu`}>
                    <NavBar menuChange={menuActive} />
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