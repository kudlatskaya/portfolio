import s from './Skills.module.scss'
import c from '../common/styles/styles.module.scss'
import Skill from "./skill/Skill";
import Subtitle from "../components/subtitle/Subtitle";

const Skills = () => {
    let skills: string[] = ['React', 'HTML', 'CSS']
    let descriptions: string[] = [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
    ]

    return (
        <div>
            <div className={c.container}>
                <h2 className={c.sectionTitle}>PROFESSIONAL SKILLS</h2>
                <Subtitle text={'MY '} primaryText={'Talent'}/>
                <div className={`${s.skills} ${c.contentSpaceBetween}`}>
                    <Skill title={skills[0]} description={descriptions[0]}/>
                    <Skill title={skills[1]} description={descriptions[1]}/>
                    <Skill title={skills[2]} description={descriptions[2]}/>
                    <Skill title={skills[0]} description={descriptions[0]}/>
                    <Skill title={skills[1]} description={descriptions[1]}/>
                    <Skill title={skills[2]} description={descriptions[2]}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;