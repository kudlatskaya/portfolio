import s from './Projects.module.scss'
import c from '../common/styles/styles.module.scss'
import Project from "./project/Project";

const Projects = () => {
    let projectTitles: string[] = ['Stay Fit', 'Explore', 'Kana']
    let projectDescriptions: string[] = [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
    ]

    return (
        <div className={s.projectsBlock}>
            <div className={c.container}>
                <h2 className={c.title}>Portfolio</h2>
                <div className={`${s.projects} ${c.contentSpaceBetween}`}>
                    <Project title={projectTitles[0]} description={projectDescriptions[0]}/>
                    <Project title={projectTitles[1]} description={projectDescriptions[1]}/>
                    <Project title={projectTitles[2]} description={projectDescriptions[2]}/>
                    <Project title={projectTitles[0]} description={projectDescriptions[0]}/>
                    <Project title={projectTitles[1]} description={projectDescriptions[1]}/>
                    <Project title={projectTitles[2]} description={projectDescriptions[2]}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;