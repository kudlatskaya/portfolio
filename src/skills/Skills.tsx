import s from './Skills.module.scss'
import c from '../common/styles/styles.module.scss'
import Skill from "./skill/Skill";
import Subtitle from "../components/subtitle/Subtitle";

import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

type SkillsType = {
    icon: string,
    title: string,
}

const Skills = () => {
    let skills: SkillsType[] = [
        {icon: '../../assets/css.svg', title: 'JavaScript'},
        {icon: 'src/assets/css.svg', title: 'HTML'},
        {icon: 'src/assets/css.svg', title: 'CSS'},
        {icon: 'src/assets/css.svg', title: 'React'},
        {icon: 'src/assets/css.svg', title: 'Redux'},
        {icon: 'src/assets/css.svg', title: 'Storybook'},
        {icon: 'src/assets/css.svg', title: 'Git'},
        {icon: 'src/assets/css.svg', title: 'Redux Toolkit'},
    ]


    return (
        <div>
            <div className={c.container}>
                <h2 className={c.sectionTitle}>PROFESSIONAL SKILLS</h2>
                <Subtitle text={'MY '} primaryText={'Talent'}/>
                <div className={`${s.skills} ${c.contentSpaceBetween}`}>
                    {
                        skills.map((s, index) => <Skill key={index} icon={s.icon} title={s.title}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;