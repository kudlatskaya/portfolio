import s from './Projects.module.scss'
import c from '../common/styles/styles.module.scss'
import Project from "./project/Project";
import Subtitle from "../components/subtitle/Subtitle";
import defaultProject from '../assets/projects/default_proj.png'

const Projects = () => {
    let projects = [
        {title: 'Stay Fit', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy', url: defaultProject},
        {title: 'Explore', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy', url: defaultProject},
        {title: 'Kana', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy', url: defaultProject},
        {title: 'Stay Fit', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy', url: defaultProject},
        {title: 'Explore', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy', url: defaultProject},
        {title: 'Kana', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy', url: defaultProject},
    ]

    return (
        <div className={s.projectsBlock}>
            <div className={c.container}>
                <h2 className={c.sectionTitle}>Portfolio</h2>
                <Subtitle text={'MY '} primaryText={'Cases'}/>
                <div className={`${s.projects} ${c.contentSpaceBetween}`}>
                    {
                        projects.map((p, index) =>
                            <Project key={index}
                                     title={p.title}
                                     description={p.description}
                                     url={p.url}
                            />
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default Projects;