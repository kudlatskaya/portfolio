import s from './Project.module.css'
import c from '../common/styles/Container.module.css'

type SkillPropsType = {
    title: string,
    description: string
}

const Project = ({title, description}: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3 className={s.title}>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
};

export default Project;