import Navigation from './navigation/Navigation.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Skills from './pages/Skills.jsx';
import Footer from './pages/Footer.jsx'

export default function () {
    return (
        <>
            <Navigation/>
            <main className={"main-wrapper"}>
                <Home/>
                <About/>
                <Skills/>
                <Projects/>
                <Contact/>
            </main>
            <Footer/>
        </>
    )
}