import s from './Project.module.scss'
import c from '../common/styles/Container.module.scss'

type ProjectPropsType = {
    title: string,
    description: string
}

const Project = ({title, description}: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.projectImg}></div>
            <h3 className={s.title}>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
};

export default Project;