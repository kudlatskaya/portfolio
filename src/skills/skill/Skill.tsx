import s from './Skill.module.css'
import c from '../../common/styles/Container.module.css'

type SkillPropsType = {
    title: string
}

const Skill = ({title}: SkillPropsType) => {

    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3 className={s.title}>{title}</h3>
        </div>
    );
};

export default Skill;