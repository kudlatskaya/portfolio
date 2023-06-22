import s from './Skill.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconDefinition} from '@fortawesome/fontawesome-common-types/index'

type SkillPropsType = {
    icon: IconDefinition | string,
    title: string,
}

const Skill = ({icon, title}: SkillPropsType) => {

    return (
        <div className={s.skill}>
            <div className={s.icon}>
                {
                    typeof icon === 'string'
                        ? <img src={s.icon} alt=""/>
                        : <FontAwesomeIcon className={s.fontAwesomeIcon} icon={icon}/>
                }
            </div>
            <h3 className={s.title}>{title}</h3>
        </div>
    );
};

export default Skill;