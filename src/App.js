import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLink from "./components/SocialLink";
// import Messenger from "./components/Messenger";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FacebookMsg from "./components/FacebookMsg";

function App() {
    return (
        <>
            <NavBar />
            <Home />
            <About />
            <Portfolio />
            <Experience />
            <Contact />
            <FacebookMsg />

            <Footer />

            <SocialLink />
        </>
    );
}

export default App;
