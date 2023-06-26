import s from './Skill.module.scss'
import c from '../../common/styles/styles.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconDefinition} from '@fortawesome/fontawesome-common-types/index'

type SkillPropsType = {
    icon: IconDefinition | string,
    title: string,
}

const Skill = ({icon, title}: SkillPropsType) => {

    return (
        <div className={s.skill}>
            <div className={c.icon}>
                {
                    typeof icon === 'string'
                        ? <img className={s.svgIcon} src={icon} alt=""/>
                        : <FontAwesomeIcon className={s.svgIcon} icon={icon}/>
                }
            </div>
            <h3 className={s.title}>{title}</h3>
        </div>
    );
};

export default Skill;