import s from './Skill.module.scss'

type SkillPropsType = {
    title: string,
    description: string
}

const Skill = ({title, description}: SkillPropsType) => {

    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3 className={s.title}>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
};

export default Skill;