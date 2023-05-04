import s from './Projects.module.css'
import c from '../common/styles/Container.module.css'
import Project from "./project/Project";

const Projects = () => {
    let skills: string[] = ['React', 'HTML', 'CSS']
    let descriptions: string[] = [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
    ]

    return (
        <div className={s.projectsBlock}>
            <div className={c.container}>
                <h2 className={c.title}>Projects</h2>
                <div className={`${s.projects} ${c.contentSpaceBetween}`}>
                    <Project title={skills[0]} description={descriptions[0]}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;