import {NavBar} from '../navigation/Navigation.jsx';


export default function Footer() {
    return (
        <>
            <footer className={"footer-group section-wrapper"}>
                <div className={"footer-wrapper"}>
                    <NavBar/>
                </div>
                <div className={"copyright"}>
                    <p className={"copyright-text"}>&copy;2025 Nishan Subba | All Rights Reserved</p>
                </div>
            </footer>
        </>

    )
}