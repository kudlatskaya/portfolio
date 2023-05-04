import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Resume from "./resume/Resume";
import Contacts from "./contacts/Contacts";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects />
            <Resume />
            <Contacts />
        </div>
    );
}

export default App;
