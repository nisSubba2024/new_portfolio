export function NavBar() {
    return(
        <>
            <ul className={"nav-list"}>
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
    return (
        <>
            <header className={"nav-header"}>
                <div className="logo">
                    <a href={"#home"} className={"link"}>Nishan Subba</a>
                </div>
                <nav className={"nav-menu"}>
                    <NavBar />
                    <div className="visit-github">
                        <a href={"#"} className={"link btn github-btn"}>Visit Github
                        </a>
                    </div>
                </nav>
            </header>
        </>
    )
}