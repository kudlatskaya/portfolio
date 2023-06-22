import s from './Skills.module.scss'
import c from '../common/styles/styles.module.scss'
import Skill from "./skill/Skill";
import Subtitle from "../components/subtitle/Subtitle";
import { faReact, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import faGit from '../assets/git_icon.svg'
import faCss3 from '../assets/css_icon.svg'
import faJs from '../assets/js_icon.svg'
import  faRedux  from '../../src/assets/redux_icon.svg'
import  faStorybook  from '../assets/storybook_icon.svg'
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

type SkillsType = {
    icon: IconDefinition | string,
    title: string,
}

const Skills = () => {
    let skills: SkillsType[] = [
        {icon: faJs, title: 'JavaScript'},
        {icon: faHtml5, title: 'HTML'},
        {icon: faCss3, title: 'CSS'},
        {icon: faReact, title: 'React'},
        {icon: faRedux, title: 'Redux'},
        {icon: faStorybook, title: 'Storybook'},
        {icon: faGit, title: 'Git'},
        {icon: faRedux, title: 'Redux Toolkit'},
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