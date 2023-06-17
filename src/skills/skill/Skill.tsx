import s from './Skill.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type SkillPropsType = {
    icon: string,
    title: string,
}

const Skill = ({icon, title}: SkillPropsType) => {

    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <FontAwesomeIcon icon={icon}/>
            </div>
            <h3 className={s.title}>{title}</h3>
        </div>
    );
};

export default Skill;