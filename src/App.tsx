import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Resume from "./resume/Resume";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import {Sidebar} from "./sidebar/Sidebar";
import {useEffect, useState} from "react";

function App() {
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)

    useEffect(() => {
        open && (document.body.style.overflow = 'hidden')
        !open && (document.body.style.overflow = 'unset')
    }, [open])

    return (
        <div className="App">
            <Sidebar open={open} handleClose={handleClose} />
            <Header open={open} handleOpen={handleOpen}/>
            <Main/>
            <Skills/>
            <Projects />
            <Resume />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
